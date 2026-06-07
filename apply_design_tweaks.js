const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix gradients
html = html.replace(
    /'beginner': 'radial-gradient\(circle at top, #fff7ed 0%, #f9fafb 70%\)',\s*'intermediate': 'radial-gradient\(circle at top, #f0fdf4 0%, #f9fafb 70%\)',\s*'advanced': 'radial-gradient\(circle at top, #faf5ff 0%, #f9fafb 70%\)'/,
    `'beginner': 'radial-gradient(circle at top, #ffedd5 0%, #fff7ed 40%, #f9fafb 100%)',
                    'intermediate': 'radial-gradient(circle at top, #dcfce7 0%, #f0fdf4 40%, #f9fafb 100%)',
                    'advanced': 'radial-gradient(circle at top, #f3e8ff 0%, #faf5ff 40%, #f9fafb 100%)'`
);

// 2. Fix Syllabus Navigation
html = html.replace(
    `            const handleSyllabusNav = (level, classId, sectionIdx) => {
                setCurrentLevel(level);
                setCurrentTab('learn');`,
    `            const handleSyllabusNav = (level, classId, sectionIdx) => {
                setMountedLevels(prev => ({ ...prev, [level]: true }));
                setCurrentLevel(level);
                setCurrentTab('learn');`
);

// 3. Fix Auto-Scroll Trophy
html = html.replace(
    /id=\{isCurrentTrophy && currentLevel === levelKey \? 'active-node' : undefined\}/g,
    ""
);

// 4. Modals Rewrite
const modalsOldRegex = /\s*const renderModal = \(\) => \{[\s\S]*?(?=\s*const renderSearchModal = \(\) => \{)/;

const modalsNew = `
            const renderModal = () => {
                if (!selectedClass) return null;

                const classKey = \`\${currentLevel}-\${selectedClass}\`;
                const isClassCompleted = data.completed[currentLevel].includes(selectedClass);
                const isReviewCompleted = data.reviews[currentLevel].includes(selectedClass);
                const isBookmarked = data.bookmarks[currentLevel].includes(selectedClass);
                
                const note = data.notes[classKey] || '';
                const chunk = data.chunks[classKey] || '';

                const courseInfo = courseData[currentLevel]?.find(c => c.id === selectedClass);
                const ytClassLink = courseInfo && courseInfo.videoUrl ? courseInfo.videoUrl : \`https://www.youtube.com/watch?list=\${PLAYLISTS[currentLevel]}&index=\${selectedClass}\`;
                const displayTitle = courseInfo && courseInfo.title ? courseInfo.title : \`Clase \${selectedClass}\`;
                const ytReviewLink = courseData[\`\${currentLevel}Review\`]?.find(c => c.id === selectedClass)?.videoUrl || null; 

                const bgTint = currentLevel === 'beginner' ? 'bg-orange-50' : currentLevel === 'intermediate' ? 'bg-green-50' : 'bg-purple-50';
                const bgTintDarker = currentLevel === 'beginner' ? 'bg-orange-100' : currentLevel === 'intermediate' ? 'bg-green-100' : 'bg-purple-100';
                const borderColor = currentLevel === 'beginner' ? 'border-orange-200' : currentLevel === 'intermediate' ? 'border-green-200' : 'border-purple-200';

                return (
                    <div className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center p-4 animate-fade-in backdrop-blur-sm">
                        <div className={\`\${bgTint} w-full max-w-sm rounded-3xl p-6 flex flex-col gap-4 transform transition-all border-2 \${borderColor} animate-pop-in max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/20\`}>
                            <div className={\`flex justify-between items-start border-b \${borderColor} pb-4 mb-2\`}>
                                <div className="pr-4">
                                    <div className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">{currentLevel === 'beginner' ? 'Principiante' : currentLevel === 'intermediate' ? 'Intermedio' : 'Avanzado'} • #{selectedClass}</div>
                                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{displayTitle}</h3>
                                </div>
                                <div className="flex gap-2 shrink-0">
                                    <button onClick={() => toggleBookmark(currentLevel, selectedClass)} className={\`p-2 rounded-full transition-colors \${isBookmarked ? 'bg-orange-500 text-white shadow-[0_0_10px_rgba(255,165,0,0.5)]' : 'bg-white text-gray-400 hover:text-gray-600 shadow-sm'}\`} title="Marcar para repasar"><Icon name="Bookmark" /></button>
                                    <button onClick={() => { setSelectedClass(null); setDescExpanded(false); }} className="bg-white shadow-sm p-2 rounded-full text-gray-400 hover:text-gray-600"><Icon name="X" /></button>
                                </div>
                            </div>

                            {/* RECUADRO DE APUNTES CON EXPANSION A MODAL COMPLETO */}
                            {courseInfo && courseInfo.description && (
                                <div className="bg-white p-4 rounded-xl border border-duoblue/20 mb-1 cursor-pointer hover:border-duoblue transition-colors shadow-sm group" onClick={() => setFullScreenNoteText(courseInfo.description)}>
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="text-xs font-bold text-duoblue uppercase tracking-wider flex items-center gap-1">
                                            <Icon name="BookOpen" size={14} /> Notas de la Clase
                                        </h4>
                                        <Icon name="Maximize2" size={16} className="text-duoblue group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed line-clamp-3" dangerouslySetInnerHTML={renderRichTextHTML(courseInfo.description)} />
                                    <div className="mt-3 text-center text-[10px] font-bold text-duoblue/80 uppercase tracking-widest border-t border-gray-100 pt-2">Toca para leer todo</div>
                                </div>
                            )}

                            <div className="flex gap-2 mb-2 mt-1">
                                <a href={ytClassLink} target="_blank" className="duo-btn flex-1 bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold py-3 rounded-2xl flex flex-col items-center justify-center gap-1 border-[#b30000] text-sm"><Icon name="Youtube" size={20} /><span>Clase (60m)</span></a>
                                
                                {/* BOTON DE REPASO RESTAURADO Y SIEMPRE VISIBLE */}
                                <button 
                                    onClick={() => {
                                        if (ytReviewLink) {
                                            window.open(ytReviewLink, '_blank');
                                        } else {
                                            alert(\`No se encontró el enlace de repaso.\\n\\nPor favor, ve a la pestaña "Perfil" y presiona el botón "Sync" para descargar el archivo \${currentLevel}Review.csv desde GitHub.\`);
                                        }
                                    }}
                                    className="duo-btn flex-1 bg-duogold hover:bg-duogoldDark text-white font-bold py-3 rounded-2xl flex flex-col items-center justify-center gap-1 border-[#cca000] text-sm"
                                >
                                    <Icon name="PlayCircle" size={20} /><span>Repaso (18m)</span>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 gap-3 mb-2">
                                <button onClick={() => { const d = !data.completed[currentLevel].includes(selectedClass); if(d) confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#58cc02', '#ffffff'] }); toggleProgress(currentLevel, selectedClass, 'completed'); }} className={\`duo-btn w-full font-bold py-3 px-2 rounded-2xl flex items-center justify-center gap-2 text-[15px] border-b-4 \${isClassCompleted ? 'bg-white text-gray-700 border-gray-300' : 'bg-duogreen text-white border-duogreenDark'}\`}>
                                    {isClassCompleted ? <Icon name="Undo2" size={20}/> : <Icon name="Check" size={20}/>} {isClassCompleted ? 'Desmarcar Clase' : 'Completar Clase (y previas)'}
                                </button>
                                <button onClick={() => { const d = !data.reviews[currentLevel].includes(selectedClass); if(d) confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#ffc800', '#ffffff'] }); toggleProgress(currentLevel, selectedClass, 'reviews'); }} className={\`duo-btn w-full font-bold py-3 px-2 rounded-2xl flex items-center justify-center gap-2 text-[15px] border-b-4 \${isReviewCompleted ? 'bg-white text-gray-700 border-gray-300' : 'bg-duogold text-white border-duogoldDark'}\`}>
                                    {isReviewCompleted ? <Icon name="Undo2" size={20}/> : <Icon name="RotateCw" size={20}/>} {isReviewCompleted ? 'Desmarcar Repaso' : 'Completar Repaso (y previos)'}
                                </button>
                            </div>

                            {/* RECUADRO DE CHUNKS CON BOTON DE EXPANSION */}
                            <div className={\`mt-2 \${bgTintDarker} p-3 rounded-2xl border border-purple-200 shadow-inner\`}>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="flex items-center gap-2 text-sm font-bold text-purple-600">
                                        <Icon name="Zap" size={16} /> Estructuras / Chunks
                                    </label>
                                    <button onClick={() => setFullScreenEdit({ classKey, type: 'chunks' })} className="flex items-center gap-1 text-[10px] bg-purple-500/10 px-2 py-1 rounded text-purple-600 hover:bg-purple-500/20 transition-colors uppercase tracking-wider font-bold">
                                        <Icon name="Maximize2" size={12} /> Expandir
                                    </button>
                                </div>
                                <textarea className="w-full bg-white border border-purple-200 rounded-xl p-3 text-gray-900 focus:outline-none focus:border-purple-500 resize-none h-16 font-mono text-[13px] shadow-sm" placeholder="Ej. ==cost an arm and a leg==" value={chunk} onChange={(e) => saveChunk(classKey, e.target.value)}></textarea>
                            </div>

                            {/* RECUADRO DE NOTAS CON BOTON DE EXPANSION */}
                            <div className={\`mt-2 \${bgTintDarker} p-3 rounded-2xl border border-blue-200 shadow-inner\`}>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="flex items-center gap-2 text-sm font-bold text-duoblue">
                                        <Icon name="BookOpen" size={16} /> Mis Notas
                                    </label>
                                    <button onClick={() => setFullScreenEdit({ classKey, type: 'notes' })} className="flex items-center gap-1 text-[10px] bg-blue-500/10 px-2 py-1 rounded text-duoblue hover:bg-blue-500/20 transition-colors uppercase tracking-wider font-bold">
                                        <Icon name="Maximize2" size={12} /> Expandir
                                    </button>
                                </div>
                                <textarea className="w-full bg-white border border-blue-200 rounded-xl p-3 text-gray-900 focus:outline-none focus:border-duoblue resize-none h-16 text-[14px] shadow-sm" placeholder="Escribe tus apuntes libres aquí..." value={note} onChange={(e) => saveNote(classKey, e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>
                );
            };

            const renderFullScreenNote = () => {
                if (!fullScreenNoteText) return null;
                const bgTint = currentLevel === 'beginner' ? 'bg-orange-50' : currentLevel === 'intermediate' ? 'bg-green-50' : 'bg-purple-50';
                const borderColor = currentLevel === 'beginner' ? 'border-orange-200' : currentLevel === 'intermediate' ? 'border-green-200' : 'border-purple-200';

                return (
                    <div className={\`fixed inset-0 \${bgTint} z-[70] flex flex-col animate-slide-up\`}>
                        <div className={\`flex justify-between items-center p-4 border-b \${borderColor} bg-white shadow-sm shrink-0 pt-safe\`}>
                            <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                                <Icon name="BookOpen" className="text-duoblue" /> Apuntes de la Clase
                            </h3>
                            <button onClick={() => setFullScreenNoteText(null)} className="bg-gray-100 p-2 rounded-full text-gray-500 hover:text-gray-700">
                                <Icon name="X" />
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto flex-1 text-gray-800 leading-relaxed whitespace-pre-wrap text-[15px] pb-safe" dangerouslySetInnerHTML={renderRichTextHTML(fullScreenNoteText)} />
                    </div>
                );
            };

            // MODAL DEL EDITOR DE PANTALLA COMPLETA
            const renderFullScreenEditor = () => {
                if (!fullScreenEdit) return null;
                
                const { classKey, type } = fullScreenEdit;
                const text = type === 'chunks' ? (data.chunks[classKey] || '') : (data.notes[classKey] || '');
                const bgTint = currentLevel === 'beginner' ? 'bg-orange-50' : currentLevel === 'intermediate' ? 'bg-green-50' : 'bg-purple-50';
                
                const handleChange = (e) => {
                    if (type === 'chunks') saveChunk(classKey, e.target.value);
                    else saveNote(classKey, e.target.value);
                };

                const title = type === 'chunks' ? "Estructuras / Chunks" : "Mis Notas";
                const iconName = type === 'chunks' ? "Zap" : "BookOpen";
                const colorClass = type === 'chunks' ? "text-purple-600" : "text-duoblue";
                const placeholder = type === 'chunks' ? "Ej. ==cost an arm and a leg==" : "Escribe tus apuntes aquí...";
                const bgFocusClass = type === 'chunks' ? "focus:border-purple-500" : "focus:border-duoblue";

                return (
                    <div className={\`fixed inset-0 \${bgTint} z-[80] flex flex-col animate-slide-up\`}>
                        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white shadow-sm shrink-0 pt-safe">
                            <h3 className={\`font-bold text-lg flex items-center gap-2 \${colorClass}\`}>
                                <Icon name={iconName} /> {title}
                            </h3>
                            <button onClick={() => setFullScreenEdit(null)} className="bg-duogreen hover:bg-duogreenDark text-white px-4 py-2 rounded-xl font-bold flex items-center gap-1 transition-colors shadow-sm">
                                <Icon name="Check" size={18} /> Listo
                            </button>
                        </div>
                        <div className="p-4 flex-1 flex flex-col pb-safe">
                            <div className="bg-white p-3 rounded-xl mb-3 flex items-center gap-2 text-sm text-gray-600 shadow-sm border border-gray-200">
                                <Icon name="Info" size={16} className={colorClass} /> 
                                <span>Usa <strong className="text-gray-900">==texto==</strong> para subrayar lo más importante.</span>
                            </div>
                            <textarea 
                                className={\`w-full flex-1 bg-white border border-gray-300 rounded-2xl p-4 text-gray-900 focus:outline-none \${bgFocusClass} resize-none text-[16px] leading-relaxed shadow-sm \${type === 'chunks' ? 'font-mono' : ''}\`}
                                value={text}
                                onChange={handleChange}
                                placeholder={placeholder}
                                autoFocus
                            ></textarea>
                        </div>
                    </div>
                );
            };

`;

html = html.replace(modalsOldRegex, modalsNew);

fs.writeFileSync('index.html', html);
console.log("Successfully applied design tweaks and bug fixes.");
