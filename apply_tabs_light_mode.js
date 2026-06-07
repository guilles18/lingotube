const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. STRONGER GRADIENTS FOR THE LEARN TAB
html = html.replace(
    /'beginner': 'radial-gradient\(circle at top, #ffedd5 0%, #fff7ed 40%, #f9fafb 100%\)',\s*'intermediate': 'radial-gradient\(circle at top, #dcfce7 0%, #f0fdf4 40%, #f9fafb 100%\)',\s*'advanced': 'radial-gradient\(circle at top, #f3e8ff 0%, #faf5ff 40%, #f9fafb 100%\)'/,
    `'beginner': 'radial-gradient(circle at top, #fed7aa 0%, #ffedd5 50%, #f9fafb 100%)',
                    'intermediate': 'radial-gradient(circle at top, #bbf7d0 0%, #dcfce7 50%, #f9fafb 100%)',
                    'advanced': 'radial-gradient(circle at top, #e9d5ff 0%, #f3e8ff 50%, #f9fafb 100%)'`
);

// 2. TABS REPLACEMENTS (Bookmarks, Stats, Profile, TabBar, SectionModal)
// We will do scoped string replacements to avoid messing up buttons that NEED text-white

// renderBookmarksTab
html = html.replace(/<h1 className="text-2xl font-bold text-white">Para Repasar<\/h1>/g, '<h1 className="text-2xl font-bold text-gray-900">Para Repasar</h1>');
html = html.replace(/<div className="bg-surface border-2 border-duogray rounded-2xl p-8 text-center mt-10 shadow-lg">/g, '<div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center mt-10 shadow-sm">');
html = html.replace(/<h2 className="text-lg font-bold text-white mb-2">¡Todo dominado!<\/h2>/g, '<h2 className="text-lg font-bold text-gray-900 mb-2">¡Todo dominado!</h2>');
html = html.replace(/hover:bg-surface\/50/g, 'hover:bg-gray-100/50');
html = html.replace(/bg-darker px-2 py-0\.5 rounded-full border border-white\/5/g, 'bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200');

// renderStatsTab
html = html.replace(/<h1 className="text-2xl font-bold text-white mb-1">Tu Progreso Global<\/h1>/g, '<h1 className="text-2xl font-bold text-gray-900 mb-1">Tu Progreso Global</h1>');
html = html.replace(/<div className="bg-surface p-4 rounded-3xl border border-white\/5/g, '<div className="bg-white p-4 rounded-3xl border border-gray-200');
html = html.replace(/<div className="text-2xl font-black text-white">/g, '<div className="text-2xl font-black text-gray-900">');
html = html.replace(/<div className="text-3xl font-black text-white flex items-baseline gap-1">/g, '<div className="text-3xl font-black text-gray-900 flex items-baseline gap-1">');
html = html.replace(/<div className="bg-surface rounded-3xl p-5 mb-6 border border-white\/5 shadow-lg shadow-black\/20">/g, '<div className="bg-white rounded-3xl p-5 mb-6 border border-gray-200 shadow-sm shadow-gray-200/50">');
html = html.replace(/<h2 className="font-bold mb-6 text-white text-lg flex items-center gap-2">/g, '<h2 className="font-bold mb-6 text-gray-900 text-lg flex items-center gap-2">');
html = html.replace(/<span className="text-white">\{l\.name\}<\/span>/g, '<span className="text-gray-900">{l.name}</span>');
html = html.replace(/<div className="h-4 w-full bg-darker rounded-full/g, '<div className="h-4 w-full bg-gray-100 rounded-full');
html = html.replace(/border-r-2 border-white\/30/g, 'border-r-2 border-white');
html = html.replace(/<div className="w-10 h-10 rounded-full bg-darker border border-dashed border-white\/10/g, '<div className="w-10 h-10 rounded-full bg-gray-100 border border-dashed border-gray-300');

// renderProfileTab
html = html.replace(/<h1 className="text-2xl font-bold mb-6">Configuración y Perfil<\/h1>/g, '<h1 className="text-2xl font-bold text-gray-900 mb-6">Configuración y Perfil</h1>');
html = html.replace(/<div className="bg-surface rounded-2xl p-5 mb-6 border-2 border-duogray shadow-lg">/g, '<div className="bg-white rounded-2xl p-5 mb-6 border border-gray-200 shadow-sm">');
html = html.replace(/<h2 className="font-bold text-lg text-white">Copia de Seguridad<\/h2>/g, '<h2 className="font-bold text-lg text-gray-900">Copia de Seguridad</h2>');
html = html.replace(/<h2 className="font-bold text-lg text-white">Sincronización de Datos<\/h2>/g, '<h2 className="font-bold text-lg text-gray-900">Sincronización de Datos</h2>');
html = html.replace(/<div key=\{lvl\} className="mb-6 bg-darker p-4 rounded-xl border border-surface">/g, '<div key={lvl} className="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-200">');
html = html.replace(/<h3 className="font-bold text-md mb-3 text-white border-b border-surface pb-2">/g, '<h3 className="font-bold text-md mb-3 text-gray-900 border-b border-gray-200 pb-2">');

// renderTabBar
html = html.replace(/<nav className="fixed bottom-0 w-full bg-darker\/80 backdrop-blur-xl border-t border-white\/5/g, '<nav className="fixed bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-gray-200');

// renderHeader
html = html.replace(/<header className="fixed top-0 w-full bg-darker\/80 backdrop-blur-xl border-b border-white\/5 z-40">/g, '<header className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200 z-40">');

// Also update renderSectionModal
// The regex finds renderSectionModal block up to renderModal
const sectionModalRegex = /const renderSectionModal = \(\) => \{[\s\S]*?(?=\s*const renderModal = \(\) => \{)/;
const sectionModalNew = `const renderSectionModal = () => {
                if (!sectionModal) return null;
                const themeConfig = {
                    'beginner': { bg: 'bg-duoorange', border: 'border-duoorangeDark' },
                    'intermediate': { bg: 'bg-duogreen', border: 'border-duogreenDark' },
                    'advanced': { bg: 'bg-duopurple', border: 'border-duopurpleDark' }
                };
                const theme = themeConfig[currentLevel];
                
                return (
                    <div className="fixed inset-0 bg-black/40 z-[60] flex flex-col justify-end sm:items-center sm:justify-center p-4 animate-fade-in backdrop-blur-sm">
                        <div className="bg-white w-full max-w-sm rounded-3xl p-6 flex flex-col gap-4 transform transition-all border border-gray-200 animate-slide-up sm:animate-pop-in shadow-2xl">
                            <div className="flex justify-between items-start border-b border-gray-200 pb-4 mb-2">
                                <div>
                                    <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Sección {sectionModal.sectionIdx + 1}</div>
                                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{sectionModal.title}</h3>
                                </div>
                                <button onClick={() => setSectionModal(null)} className="bg-gray-100 p-2 rounded-full text-gray-500 hover:text-gray-700 shadow-sm"><Icon name="X" /></button>
                            </div>
                            <div className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-2xl border border-gray-200 shadow-inner">
                                {sectionModal.desc}
                            </div>
                            <button onClick={() => setSectionModal(null)} className={\`duo-btn w-full font-bold py-3 px-2 rounded-2xl flex items-center justify-center gap-2 text-[15px] border-b-4 \${theme.bg} text-white \${theme.border}\`}>
                                Entendido
                            </button>
                        </div>
                    </div>
                );
            };

            `;
html = html.replace(sectionModalRegex, sectionModalNew);

fs.writeFileSync('index.html', html);
console.log("Successfully updated tabs for Light Mode.");
