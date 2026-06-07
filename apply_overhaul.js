const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Tailwind config
html = html.replace("duoblueDark: '#1899d6',", 
"duoblueDark: '#1899d6',\n                        duoorange: '#f97316',\n                        duoorangeDark: '#ea580c',\n                        duopurple: '#a855f7',\n                        duopurpleDark: '#9333ea',");

// 2. Body background
html = html.replace("body { background: radial-gradient(circle at top, #202f36 0%, #111b21 50%); background-attachment: fixed;", "body { background-color: #111b21; background-attachment: fixed;");

// 3. State variables
html = html.replace("const [searchQuery, setSearchQuery] = React.useState('');", 
"const [searchQuery, setSearchQuery] = React.useState('');\n            const [sectionModal, setSectionModal] = React.useState(null);");

// 4. Effects
const oldEffect = `React.useEffect(() => {
                if (currentTab === 'learn') {
                    setTimeout(() => { 
                        const activeNode = document.getElementById('active-node');
                        if (activeNode) activeNode.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
                    }, 150);
                }
            }, [currentTab, currentLevel]);`;

const newEffect = `React.useEffect(() => {
                const bgColors = {
                    'beginner': 'radial-gradient(circle at top, #432104 0%, #111b21 70%)',
                    'intermediate': 'radial-gradient(circle at top, #143601 0%, #111b21 70%)',
                    'advanced': 'radial-gradient(circle at top, #2b1d3d 0%, #111b21 70%)'
                };
                document.body.style.background = bgColors[currentLevel] || bgColors['intermediate'];
                document.body.style.backgroundAttachment = 'fixed';
            }, [currentLevel]);

            React.useEffect(() => {
                if (currentTab === 'learn') {
                    setTimeout(() => { 
                        const activeNode = document.getElementById('active-node');
                        if (activeNode) {
                            activeNode.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
                        } else {
                            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                        }
                    }, 150);
                }
            }, [currentTab, currentLevel]);`;

html = html.replace(oldEffect, newEffect);

// 5. Replace renderLearnTab
// Instead of simple replace, let's use split by lines to replace the exact block.
const lines = html.split('\n');
let startIdx = lines.findIndex(l => l.includes("const renderLearnTab = () => {"));
let endIdx = -1;
if (startIdx !== -1) {
    for (let i = startIdx; i < lines.length; i++) {
        if (lines[i].includes("const renderBookmarksTab = () => {")) {
            endIdx = i;
            break;
        }
    }
}

if (startIdx !== -1 && endIdx !== -1) {
    const renderLearnTabReplacement = `            const renderLearnTab = () => {
                const classes = Array.from({ length: TOTAL_CLASSES }, (_, i) => i + 1);
                
                const themeConfig = {
                    'beginner': { bg: 'bg-duoorange', border: 'border-duoorangeDark', text: 'text-duoorange' },
                    'intermediate': { bg: 'bg-duogreen', border: 'border-duogreenDark', text: 'text-duogreen' },
                    'advanced': { bg: 'bg-duopurple', border: 'border-duopurpleDark', text: 'text-duopurple' }
                };

                return (
                    <div className="pb-24 pt-20 px-4 max-w-md mx-auto relative">

                        <div className="flex bg-surface rounded-2xl p-1 mb-8 shadow-lg">
                            {['beginner', 'intermediate', 'advanced'].map(lvl => (
                                <button key={lvl} onClick={() => setCurrentLevel(lvl)} className={\`flex-1 py-2 text-sm font-bold rounded-xl transition-colors \${currentLevel === lvl ? 'bg-duogray text-white' : 'text-duotext hover:bg-duogray/50'}\`}>
                                    {lvl === 'beginner' ? 'Principiante' : lvl === 'intermediate' ? 'Intermedio' : 'Avanzado'}
                                </button>
                            ))}
                        </div>

                        {['beginner', 'intermediate', 'advanced'].map(levelKey => {
                            if (!mountedLevels[levelKey]) return null;
                            const completedInLevel = data.completed[levelKey] || [];
                            const reviewsInLevel = data.reviews[levelKey] || [];
                            const theme = themeConfig[levelKey];
                            
                            let nextUp = classes.find(c => !completedInLevel.includes(c));
                            if (!nextUp) nextUp = classes.find(c => !reviewsInLevel.includes(c)) || TOTAL_CLASSES + 1;
                            
                            const levelData = SYLLABUS_DATA.find(l => l.level === levelKey);

                            return (
                                <div key={levelKey} style={{ display: currentLevel === levelKey ? 'block' : 'none' }}>
                                    <div className="mb-8 flex items-center justify-between bg-surface p-4 rounded-2xl">
                                        <div><h2 className="font-bold text-lg text-white">Progreso de Nivel</h2><p className="text-sm text-duotext"><span className={theme.text}>{completedInLevel.length} Clases</span> / <span className="text-duogold">{reviewsInLevel.length} Repasos</span></p></div>
                                        <div className="text-right"><div className={\`text-xl font-bold \${theme.text}\`}>{Math.round((completedInLevel.length / TOTAL_CLASSES) * 100)}%</div></div>
                                    </div>

                                    <div className="flex flex-col items-center relative">
                                        {levelData.sections.map((section, sectionIdx) => {
                                            const rangeParts = section.range.split(' - ');
                                            const startCls = parseInt(rangeParts[0]);
                                            const endCls = parseInt(rangeParts[1]);
                                            const sectionClasses = classes.filter(c => c >= startCls && c <= endCls);
                                            
                                            return (
                                                <div key={sectionIdx} className="w-full flex flex-col items-center relative mb-6">
                                                    {/* Sticky Header */}
                                                    <div className={\`sticky top-[72px] z-40 w-full \${theme.bg} text-white px-4 py-3 rounded-2xl shadow-lg border-b-4 \${theme.border} mb-8 cursor-pointer hover:opacity-90 transition-opacity\`} onClick={() => setSectionModal({ ...section, sectionIdx })}>
                                                        <div className="flex justify-between items-center">
                                                            <div>
                                                                <div className="text-[10px] font-bold opacity-80 uppercase tracking-wider mb-0.5">ETAPA {levelKey === 'beginner' ? 1 : levelKey === 'intermediate' ? 2 : 3}, SECCIÓN {sectionIdx + 1}</div>
                                                                <div className="text-sm font-bold">{section.title.split(' (')[0]}</div>
                                                            </div>
                                                            <div className="bg-black/20 p-1.5 rounded-lg">
                                                                <Icon name="BookOpen" size={20} className="opacity-90" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Mascot Logic: Render once per section at the beginning */}
                                                    <div className="relative w-full flex flex-col items-center">
                                                        <img src="./cat_mascot.png" alt="Mascota" className="absolute -left-2 top-0 w-24 h-24 object-contain drop-shadow-xl z-0 opacity-90 animate-bounce-slow" style={{ transform: 'scaleX(-1)' }} />
                                                        
                                                        {sectionClasses.map((cls, idx) => {
                                                            const isClassCompleted = completedInLevel.includes(cls);
                                                            const isReviewCompleted = reviewsInLevel.includes(cls);
                                                            const isCurrent = cls === nextUp;
                                                            const isBookmarked = data.bookmarks[levelKey].includes(cls);
                                                            const hasNote = !!data.notes[\`\${levelKey}-\${cls}\`] || !!data.chunks[\`\${levelKey}-\${cls}\`];
                                                            
                                                            // Calculate index relative to overall classes for offset
                                                            const globalIdx = cls - 1;
                                                            const offset = getOffset(globalIdx);
                                                            
                                                            let bgColor = 'bg-surface', borderColor = 'border-duogray', iconColor = '#afbac0', extraClasses = '', iconName = hasNote ? "BookOpen" : "Play";

                                                            if (isBookmarked && !isCurrent) { borderColor = 'border-orange-500'; extraClasses += ' shadow-[0_0_10px_rgba(249,115,22,0.3)]'; }

                                                            if (isReviewCompleted) { bgColor = 'bg-duogold'; borderColor = 'border-duogoldDark'; iconColor = '#ffffff'; iconName = "Check"; } 
                                                            else if (isClassCompleted) {
                                                                if (isCurrent) { bgColor = 'bg-duogold'; borderColor = 'border-duogoldDark'; iconColor = '#ffffff'; extraClasses += ' animate-bounce-slow shadow-[0_0_20px_rgba(255,200,0,0.5)]'; iconName = "RotateCw"; } 
                                                                else { bgColor = theme.bg; borderColor = theme.border; iconColor = '#ffffff'; iconName = "Check"; }
                                                            } else {
                                                                if (isCurrent) { bgColor = theme.bg; borderColor = theme.border; iconColor = '#ffffff'; extraClasses += \` animate-bounce-slow shadow-[0_0_20px_var(--tw-shadow-color)] shadow-\${theme.bg.split('-')[1]}-500/50\`; } 
                                                                else { extraClasses += ' opacity-70'; }
                                                            }

                                                            const connectorBg = reviewsInLevel.includes(cls + 1) ? 'bg-duogold' : completedInLevel.includes(cls + 1) ? theme.bg : 'bg-surface';

                                                            return (
                                                                <div key={cls} className="relative flex flex-col items-center mb-6 w-full">
                                                                    {idx < sectionClasses.length - 1 && (
                                                                        <div className={\`absolute w-3 h-16 -bottom-10 -z-10 transition-colors duration-500 \${connectorBg}\`} style={{ transform: \`translateX(\${(getOffset(globalIdx + 1) - offset) / 2}px) rotate(\${Math.atan2(100, getOffset(globalIdx + 1) - offset) * (180/Math.PI) - 90}deg)\`, transformOrigin: 'top center', borderRadius: '4px' }} />
                                                                    )}
                                                                    {idx === sectionClasses.length - 1 && cls < TOTAL_CLASSES && (
                                                                        <div className={\`absolute w-3 h-16 -bottom-10 -z-10 transition-colors duration-500 \${connectorBg}\`} style={{ transform: \`translateX(\${(getOffset(globalIdx + 1) - offset) / 2}px) rotate(\${Math.atan2(100, getOffset(globalIdx + 1) - offset) * (180/Math.PI) - 90}deg)\`, transformOrigin: 'top center', borderRadius: '4px' }} />
                                                                    )}
                                                                    <button id={isCurrent && currentLevel === levelKey ? 'active-node' : undefined} onClick={() => setSelectedClass(cls)} className={\`path-node w-16 h-16 rounded-full border-b-4 flex items-center justify-center transition-all \${bgColor} \${borderColor} \${extraClasses}\`} style={{ transform: \`translateX(\${offset}px)\` }}><Icon name={iconName} color={iconColor} size={28} className={iconName === 'Play' ? 'ml-1' : ''} /></button>
                                                                    <div className="absolute top-12 font-bold text-xs bg-darker px-2 py-1 rounded-full border border-surface shadow-sm" style={{ transform: \`translateX(\${offset}px)\` }}>Clase {cls}</div>
                                                                    {isBookmarked && <div className="absolute top-0 right-0 text-orange-500 bg-darker rounded-full p-0.5" style={{ transform: \`translateX(\${offset + 20}px)\` }}><Icon name="Bookmark" size={14} /></div>}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        
                                        {(() => {
                                            const isSilver = completedInLevel.length === TOTAL_CLASSES;
                                            const isGold = reviewsInLevel.length === TOTAL_CLASSES;
                                            const isCurrentTrophy = nextUp === TOTAL_CLASSES + 1;
                                            const trophyOffset = getOffset(TOTAL_CLASSES);
                                            
                                            let title = 'Trofeo Bloqueado';
                                            let trophyClass = 'opacity-30 grayscale blur-[2px] scale-90';
                                            let trophyImage = './silver_trophy.png';

                                            if (isGold) { 
                                                title = '¡Dominio Dorado!'; 
                                                trophyClass = 'drop-shadow-[0_0_40px_rgba(255,200,0,0.6)] animate-bounce-slow z-10 scale-110';
                                                trophyImage = './gold_trophy.png';
                                            } else if (isSilver) { 
                                                title = '¡Curso de Plata!'; 
                                                trophyClass = 'drop-shadow-[0_0_30px_rgba(229,231,235,0.5)] animate-bounce-slow z-10 scale-110';
                                                trophyImage = './silver_trophy.png';
                                            }

                                            return (
                                                <div id={isCurrentTrophy && currentLevel === levelKey ? 'active-node' : undefined} className="relative flex flex-col items-center mt-16 mb-10">
                                                    <div className={\`w-36 h-36 flex items-center justify-center transition-all duration-700 \${trophyClass}\`} style={{ transform: \`translateX(\${trophyOffset}px)\` }} onClick={() => { if(isGold) confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 }, colors: ['#ffc800', '#ffffff'] }); else if(isSilver) confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 }, colors: ['#e5e7eb', '#9ca3af', '#ffffff'] }); }}>
                                                        <img src={trophyImage} alt={title} className="w-full h-full object-contain" />
                                                    </div>
                                                    <div className="absolute top-32 font-bold text-sm bg-darker/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-xl text-center z-20 text-white whitespace-nowrap" style={{ transform: \`translateX(\${trophyOffset}px)\` }}>{title}</div>
                                                </div>
                                            );
                                        })()}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            };

`;
    lines.splice(startIdx, endIdx - startIdx, renderLearnTabReplacement);
    html = lines.join('\n');
}

// 6. Replace renderStatsTab
const statsOld = `            const renderStatsTab = () => {
                const bDone = data.completed.beginner.length;
                const iDone = data.completed.intermediate.length;
                const aDone = data.completed.advanced.length;
                const totalClassesDone = bDone + iDone + aDone;

                const brDone = data.reviews.beginner.length;
                const irDone = data.reviews.intermediate.length;
                const arDone = data.reviews.advanced.length;
                const totalReviewsDone = brDone + irDone + arDone;

                const totalClasses = TOTAL_CLASSES * 3;
                const minsDone = (totalClassesDone * CLASS_DURATION) + (totalReviewsDone * REVIEW_DURATION);
                const hoursDone = (minsDone / 60).toFixed(1);
                
                const minsTotalCourse = (totalClasses * CLASS_DURATION) + (totalClasses * REVIEW_DURATION);
                const hoursTotalCourse = (minsTotalCourse / 60).toFixed(1);
                const progressPercent = ((minsDone / minsTotalCourse) * 100).toFixed(1);`;

const statsNew = `            const renderStatsTab = () => {
                const bDone = data.completed.beginner.length;
                const iDone = data.completed.intermediate.length;
                const aDone = data.completed.advanced.length;
                const totalClassesDone = bDone + iDone + aDone;

                const brDone = data.reviews.beginner.length;
                const irDone = data.reviews.intermediate.length;
                const arDone = data.reviews.advanced.length;
                const totalReviewsDone = brDone + irDone + arDone;

                const totalClasses = TOTAL_CLASSES * 3;
                
                const hoursStudied = (totalClassesDone * 49) / 60;
                const hoursReviewed = (totalReviewsDone * 18) / 60;
                const totalHoursDone = (hoursStudied + hoursReviewed).toFixed(1);
                
                const classesLeft = totalClasses - totalClassesDone;
                const reviewsLeft = totalClasses - totalReviewsDone;
                const hoursLeft = ((classesLeft * 49) + (reviewsLeft * 18)) / 60;
                
                const minsDone = (totalClassesDone * CLASS_DURATION) + (totalReviewsDone * REVIEW_DURATION);
                const minsTotalCourse = (totalClasses * CLASS_DURATION) + (totalClasses * REVIEW_DURATION);
                const progressPercent = ((minsDone / minsTotalCourse) * 100).toFixed(1);`;

html = html.replace(statsOld, statsNew);

const statsUIOld = `                                <div className="bg-surface rounded-2xl p-4 shadow-sm border border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl"><Icon name="Clock" size={24} /></div>
                                        <div><h3 className="text-sm text-duotext font-bold">Tiempo Invertido</h3><p className="text-xl font-bold text-white">{hoursDone}h <span className="text-xs text-duotext font-normal">/ {hoursTotalCourse}h</span></p></div>
                                    </div>
                                </div>`;

const statsUINew = `                                <div className="bg-surface rounded-2xl p-4 shadow-sm border border-white/5 flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl"><Icon name="Clock" size={24} /></div>
                                        <div><h3 className="text-sm text-duotext font-bold">Tiempo Invertido</h3><p className="text-xl font-bold text-white">{totalHoursDone}h <span className="text-xs text-duotext font-normal">total</span></p></div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        <div className="bg-darker/30 p-2 rounded-lg text-center">
                                            <p className="text-xs text-duotext">Estudio</p>
                                            <p className="text-sm font-bold text-duogreen">{hoursStudied.toFixed(1)}h</p>
                                        </div>
                                        <div className="bg-darker/30 p-2 rounded-lg text-center">
                                            <p className="text-xs text-duotext">Repaso</p>
                                            <p className="text-sm font-bold text-duogold">{hoursReviewed.toFixed(1)}h</p>
                                        </div>
                                        <div className="bg-darker/30 p-2 rounded-lg text-center col-span-2">
                                            <p className="text-xs text-duotext">Tiempo Faltante Estimado</p>
                                            <p className="text-sm font-bold text-orange-400">{hoursLeft.toFixed(1)}h</p>
                                        </div>
                                    </div>
                                </div>`;

html = html.replace(statsUIOld, statsUINew);

// 7. Inject renderSectionModal
const modalCode = `            const renderSectionModal = () => {
                if (!sectionModal) return null;
                const themeConfig = {
                    'beginner': { bg: 'bg-duoorange', border: 'border-duoorangeDark' },
                    'intermediate': { bg: 'bg-duogreen', border: 'border-duogreenDark' },
                    'advanced': { bg: 'bg-duopurple', border: 'border-duopurpleDark' }
                };
                const theme = themeConfig[currentLevel];
                
                return (
                    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setSectionModal(null)}>
                        <div className="bg-dark w-full max-w-md h-[80vh] rounded-t-3xl shadow-2xl flex flex-col animate-slide-up" onClick={e => e.stopPropagation()}>
                            <div className={\`p-4 \${theme.bg} rounded-t-3xl flex justify-between items-center border-b-4 \${theme.border}\`}>
                                <div>
                                    <h2 className="text-xl font-bold text-white">Sección {sectionModal.sectionIdx + 1}</h2>
                                    <p className="text-sm text-white/80">{sectionModal.title.split(' (')[0]}</p>
                                </div>
                                <button onClick={() => setSectionModal(null)} className="p-2 bg-black/20 rounded-full text-white hover:bg-black/40 transition-colors"><Icon name="X" /></button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20">
                                {sectionModal.classes.map(c => (
                                    <div key={c.id} className="bg-surface p-4 rounded-xl border border-white/5 shadow-sm">
                                        <h3 className="font-bold text-white mb-2">Clase {c.id}: {c.title}</h3>
                                        <p className="text-sm text-duotext mb-3">{c.theme}</p>
                                        <div className="text-sm italic text-gray-300 bg-darker/50 p-3 rounded-lg" dangerouslySetInnerHTML={renderRichTextHTML(c.examples)} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            };

            const renderModal = () => {`;

html = html.replace("const renderModal = () => {", modalCode);

// Add to the final render output
html = html.replace("{renderModal()}", "{renderSectionModal()}\n                    {renderModal()}");

fs.writeFileSync('index.html', html);
console.log("Successfully applied UI overhaul.");
