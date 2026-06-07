const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix parseCSVText
// The string literally has "\n            const renderLearnTab = () => {"
// and ends with "\n') continue;"
const corruptRegex = /\\n            const renderLearnTab = \(\) => \{[\s\S]*?\\n'\) continue;/;
html = html.replace(corruptRegex, "\\n') continue;");

// 2. Replace the ACTUAL renderLearnTab
const renderLearnTabReplacement = `            const renderLearnTab = () => {
                const classes = Array.from({ length: TOTAL_CLASSES }, (_, i) => i + 1);
                
                const themeConfig = {
                    'beginner': { bg: 'bg-duoorange', border: 'border-duoorangeDark', text: 'text-duoorange' },
                    'intermediate': { bg: 'bg-duogreen', border: 'border-duogreenDark', text: 'text-duogreen' },
                    'advanced': { bg: 'bg-duopurple', border: 'border-duopurpleDark', text: 'text-duopurple' }
                };

                return (
                    <div className="pb-24 pt-20 px-4 max-w-md mx-auto relative">

                        <div className="flex bg-surface rounded-2xl p-1 mb-8 shadow-sm border border-gray-100">
                            {['beginner', 'intermediate', 'advanced'].map(lvl => (
                                <button key={lvl} onClick={() => setCurrentLevel(lvl)} className={\`flex-1 py-2 text-sm font-bold rounded-xl transition-colors \${currentLevel === lvl ? 'bg-gray-200 text-gray-900' : 'text-duotext hover:bg-gray-100'}\`}>
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

                            const isSilver = completedInLevel.length === TOTAL_CLASSES;
                            const isGold = reviewsInLevel.length === TOTAL_CLASSES;

                            return (
                                <div key={levelKey} style={{ display: currentLevel === levelKey ? 'block' : 'none' }}>
                                    <div className="mb-8 flex items-center justify-between bg-surface p-4 rounded-2xl shadow-sm border border-gray-100">
                                        <div><h2 className="font-bold text-lg text-gray-900">Progreso de Nivel</h2><p className="text-sm text-duotext"><span className={theme.text}>{completedInLevel.length} Clases</span> / <span className="text-duogold">{reviewsInLevel.length} Repasos</span></p></div>
                                        <div className="text-right"><div className={\`text-xl font-bold \${theme.text}\`}>{Math.round((completedInLevel.length / TOTAL_CLASSES) * 100)}%</div></div>
                                    </div>

                                    <div className="flex flex-col items-center relative">
                                        
                                        {/* Top Trophy if completed */}
                                        {(isSilver || isGold) && (() => {
                                            let title = isGold ? '¡Dominio Dorado!' : '¡Curso de Plata!';
                                            let trophyClass = isGold ? 'drop-shadow-[0_0_40px_rgba(255,200,0,0.6)] animate-bounce-slow z-10 scale-110' : 'drop-shadow-[0_0_30px_rgba(156,163,175,0.5)] animate-bounce-slow z-10 scale-110';
                                            let trophyImage = isGold ? './gold_trophy.png' : './silver_trophy.png';
                                            return (
                                                <div className="relative flex flex-col items-center mb-10 mt-4">
                                                    <div className={\`w-36 h-36 flex items-center justify-center transition-all duration-700 \${trophyClass}\`} onClick={() => { if(isGold) confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 }, colors: ['#ffc800', '#ffffff'] }); else if(isSilver) confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 }, colors: ['#e5e7eb', '#9ca3af', '#ffffff'] }); }}>
                                                        <img src={trophyImage} alt={title} className="w-full h-full object-contain" />
                                                    </div>
                                                    <div className="absolute top-32 font-bold text-sm bg-surface/90 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-xl text-center z-20 text-gray-900 whitespace-nowrap">{title}</div>
                                                </div>
                                            );
                                        })()}

                                        {levelData.sections.map((section, sectionIdx) => {
                                            const rangeParts = section.range.split(' - ');
                                            const startCls = parseInt(rangeParts[0]);
                                            const endCls = parseInt(rangeParts[1]);
                                            const sectionClasses = classes.filter(c => c >= startCls && c <= endCls);
                                            
                                            return (
                                                <div key={sectionIdx} className="w-full flex flex-col items-center relative mb-6">
                                                    {/* Sticky Header */}
                                                    <div id={\`section-hdr-\${levelKey}-\${sectionIdx}\`} className={\`sticky top-[64px] z-40 w-full \${theme.bg} text-white px-4 py-3 rounded-2xl shadow-md border-b-4 \${theme.border} mb-8 cursor-pointer hover:opacity-90 transition-opacity\`} onClick={() => setSectionModal({ ...section, sectionIdx })}>
                                                        <div className="flex justify-between items-center">
                                                            <div>
                                                                <div className="text-[10px] font-bold opacity-90 uppercase tracking-wider mb-0.5">ETAPA {levelKey === 'beginner' ? 1 : levelKey === 'intermediate' ? 2 : 3}, SECCIÓN {sectionIdx + 1}</div>
                                                                <div className="text-sm font-bold">{section.title.split(' (')[0]}</div>
                                                            </div>
                                                            <div className="bg-black/10 p-1.5 rounded-lg">
                                                                <Icon name="BookOpen" size={20} className="opacity-90" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="relative w-full flex flex-col items-center">
                                                        
                                                        {sectionClasses.map((cls, idx) => {
                                                            const isClassCompleted = completedInLevel.includes(cls);
                                                            const isReviewCompleted = reviewsInLevel.includes(cls);
                                                            const isCurrent = cls === nextUp;
                                                            const isBookmarked = data.bookmarks[levelKey].includes(cls);
                                                            const hasNote = !!data.notes[\`\${levelKey}-\${cls}\`] || !!data.chunks[\`\${levelKey}-\${cls}\`];
                                                            
                                                            const globalIdx = cls - 1;
                                                            const offset = getOffset(globalIdx);
                                                            
                                                            let bgColor = 'bg-darker', borderColor = 'border-gray-300', iconColor = '#9ca3af', extraClasses = '', iconName = hasNote ? "BookOpen" : "Play";

                                                            if (isBookmarked && !isCurrent) { borderColor = 'border-orange-500'; extraClasses += ' shadow-[0_0_10px_rgba(249,115,22,0.3)]'; }

                                                            if (isReviewCompleted) { bgColor = 'bg-duogold'; borderColor = 'border-duogoldDark'; iconColor = '#ffffff'; iconName = "Check"; } 
                                                            else if (isClassCompleted) {
                                                                if (isCurrent) { bgColor = 'bg-duogold'; borderColor = 'border-duogoldDark'; iconColor = '#ffffff'; extraClasses += ' animate-bounce-slow shadow-[0_0_20px_rgba(255,200,0,0.5)]'; iconName = "RotateCw"; } 
                                                                else { bgColor = theme.bg; borderColor = theme.border; iconColor = '#ffffff'; iconName = "Check"; }
                                                            } else {
                                                                if (isCurrent) { bgColor = theme.bg; borderColor = theme.border; iconColor = '#ffffff'; extraClasses += \` animate-bounce-slow shadow-[0_0_20px_var(--tw-shadow-color)] shadow-\${theme.bg.split('-')[1]}-500/50\`; } 
                                                                else { extraClasses += ' opacity-70'; }
                                                            }

                                                            const connectorBg = reviewsInLevel.includes(cls + 1) ? 'bg-duogold' : completedInLevel.includes(cls + 1) ? theme.bg : 'bg-darker';

                                                            return (
                                                                <div key={cls} className="relative flex flex-col items-center mb-6 w-full" id={\`node-\${levelKey}-\${cls}\`}>
                                                                    {idx < sectionClasses.length - 1 && (
                                                                        <div className={\`absolute w-3 h-16 -bottom-10 -z-10 transition-colors duration-500 \${connectorBg}\`} style={{ transform: \`translateX(\${(getOffset(globalIdx + 1) - offset) / 2}px) rotate(\${Math.atan2(100, getOffset(globalIdx + 1) - offset) * (180/Math.PI) - 90}deg)\`, transformOrigin: 'top center', borderRadius: '4px' }} />
                                                                    )}
                                                                    {idx === sectionClasses.length - 1 && cls < TOTAL_CLASSES && (
                                                                        <div className={\`absolute w-3 h-16 -bottom-10 -z-10 transition-colors duration-500 \${connectorBg}\`} style={{ transform: \`translateX(\${(getOffset(globalIdx + 1) - offset) / 2}px) rotate(\${Math.atan2(100, getOffset(globalIdx + 1) - offset) * (180/Math.PI) - 90}deg)\`, transformOrigin: 'top center', borderRadius: '4px' }} />
                                                                    )}
                                                                    
                                                                    <div className="relative flex flex-col items-center" style={{ transform: \`translateX(\${offset}px)\` }}>
                                                                        <button id={isCurrent && currentLevel === levelKey ? 'active-node' : undefined} onClick={() => setSelectedClass(cls)} className={\`path-node w-16 h-16 rounded-full border-b-4 flex items-center justify-center transition-all \${bgColor} \${borderColor} \${extraClasses}\`}><Icon name={iconName} color={iconColor} size={28} className={iconName === 'Play' ? 'ml-1' : ''} /></button>
                                                                        <div className="absolute top-16 font-bold text-xs bg-surface text-gray-900 px-2 py-1 rounded-full border border-gray-200 shadow-sm mt-1 whitespace-nowrap">Clase {cls}</div>
                                                                        {isBookmarked && <div className="absolute top-0 -right-3 text-orange-500 bg-white rounded-full p-0.5 border border-orange-200 shadow-sm"><Icon name="Bookmark" size={14} /></div>}
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        
                                        {/* Bottom Trophy */}
                                        {(() => {
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
                                                trophyClass = 'drop-shadow-[0_0_30px_rgba(156,163,175,0.5)] animate-bounce-slow z-10 scale-110';
                                                trophyImage = './silver_trophy.png';
                                            }

                                            return (
                                                <div id={isCurrentTrophy && currentLevel === levelKey ? 'active-node' : undefined} className="relative flex flex-col items-center mt-16 mb-10">
                                                    <div className={\`w-36 h-36 flex items-center justify-center transition-all duration-700 \${trophyClass}\`} style={{ transform: \`translateX(\${trophyOffset}px)\` }} onClick={() => { if(isGold) confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 }, colors: ['#ffc800', '#ffffff'] }); else if(isSilver) confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 }, colors: ['#e5e7eb', '#9ca3af', '#ffffff'] }); }}>
                                                        <img src={trophyImage} alt={title} className="w-full h-full object-contain" />
                                                    </div>
                                                    <div className="absolute top-32 font-bold text-sm bg-surface/90 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-xl text-center z-20 text-gray-900 whitespace-nowrap" style={{ transform: \`translateX(\${trophyOffset}px)\` }}>{title}</div>
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

const replaceLearnTabRegex = /[\s\S]*const renderLearnTab = \(\) => \{[\s\S]*?(?=\s*const renderBookmarksTab = \(\) => \{)/;
// Wait, the regex `[\s\S]*` at the start will match EVERYTHING from the beginning of the file!
// I should NOT use `[\s\S]*const renderLearnTab = \(\) => \{`.
// I should just use `\s*const renderLearnTab = \(\) => \{[\s\S]*?(?=\s*const renderBookmarksTab = \(\) => \{)`
const correctReplaceRegex = /\s*const renderLearnTab = \(\) => \{[\s\S]*?(?=\s*const renderBookmarksTab = \(\) => \{)/;
html = html.replace(correctReplaceRegex, "\n" + renderLearnTabReplacement + "\n");

fs.writeFileSync('index.html', html);
console.log("Successfully fixed index.html corruption.");
