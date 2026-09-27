class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <footer class="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-start">
                <!-- Coluna 1: Identidade -->
                <div class="text-center md:text-left">
                    <a href="./index.html" class="text-2xl font-extrabold text-white tracking-tighter mb-4 block">
                        LILIAN<span class="text-brand">MOREIRA</span>
                    </a>
                    <p class="text-slate-400 text-sm max-w-xs mx-auto md:mx-0">
                        Treinamento físico estruturado e natação especializada para transformar sua vida através do movimento.
                    </p>
                    <p class="text-xs text-brand-light font-semibold mt-3 flex items-center justify-center md:justify-start gap-1.5">
                        <i class="fa-solid fa-id-card"></i> CREF 177118-G/SP
                    </p>
                </div>
                
                <!-- Coluna 2: Contatos & Redes Sociais -->
                <div class="text-center md:text-left">
                    <h4 class="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contatos</h4>
                    <div class="space-y-2.5 text-slate-400 text-sm">
                        <p class="flex items-center justify-center md:justify-start gap-2">
                            <i class="fa-solid fa-location-dot text-brand shrink-0"></i>
                            <span>Santos & São Vicente - SP</span>
                        </p>
                        <p class="flex items-center justify-center md:justify-start gap-2">
                            <i class="fa-regular fa-envelope text-brand shrink-0"></i>
                            <span>lilianmoreira2@icloud.com</span>
                        </p>
                        <p class="flex items-center justify-center md:justify-start gap-2">
                            <i class="fa-brands fa-whatsapp text-brand shrink-0"></i>
                            <a href="https://wa.me/5513996660817?text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20site%20para%20bater%20um%20papo%20sobre%20treinamento%20particular." target="_blank" rel="noopener noreferrer" class="hover:text-brand transition-colors">
                                Agendar no WhatsApp
                            </a>
                        </p>
                    </div>
                    
                    <div class="flex gap-3 justify-center md:justify-start mt-5">
                        <a href="https://www.instagram.com/lili.wp" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand hover:bg-brand/10 transition-all" title="Instagram @lili.wp" aria-label="Instagram">
                            <i class="fa-brands fa-instagram text-base"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/lilian-moreira-farias-231123375/" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand hover:bg-brand/10 transition-all" title="LinkedIn" aria-label="LinkedIn">
                            <i class="fa-brands fa-linkedin-in text-sm"></i>
                        </a>
                    </div>
                </div>

                <!-- Coluna 3: Card "Avalie no Google Maps" -->
                <div class="flex justify-center md:justify-end">
                    <a href="https://share.google/c8XepCzhuYQiu3qbu" target="_blank" rel="noopener noreferrer"
                        class="group block w-full max-w-xs bg-slate-900/80 hover:bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-brand/60 transition-all duration-300 shadow-xl hover:shadow-brand/5 transform hover:-translate-y-1 text-left">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center gap-2.5">
                                <div class="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0">
                                    <svg class="w-4 h-4" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                                    </svg>
                                </div>
                                <div>
                                    <span class="text-xs font-bold text-white block leading-tight">Google Maps</span>
                                    <span class="text-[11px] text-slate-400">Perfil de Empresa</span>
                                </div>
                            </div>
                            <span class="inline-flex items-center gap-1 text-[10px] font-semibold text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded-full">
                                <i class="fa-solid fa-circle-check text-[9px]"></i> Verificado
                            </span>
                        </div>

                        <p class="text-slate-400 text-xs mb-4 leading-relaxed">
                            Sua opinião é fundamental! Já treinou com a Lilian? Deixe sua avaliação no Google Maps.
                        </p>

                        <div class="inline-flex items-center justify-between w-full py-2 px-3 bg-slate-800 group-hover:bg-brand text-slate-300 group-hover:text-slate-900 border border-slate-700/80 group-hover:border-brand rounded-xl text-xs font-bold transition-all shadow-sm">
                            <span>Avaliar no Google Maps</span>
                            <i class="fa-solid fa-arrow-up-right-from-square text-[10px] transition-transform group-hover:translate-x-0.5"></i>
                        </div>
                    </a>
                </div>
            </div>
            
            <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 text-center md:text-left">
                <div class="space-y-2">
                    <p>&copy; 2026 Lilian Moreira Farias • CREF 177118-G/SP. Todos os direitos reservados.</p>
                    <p>
                        Feito com <i class="fa-solid fa-heart text-red-500 mx-1"></i> por 
                        <a href="https://linkedin.com/in/cesarovies" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-brand transition-colors font-semibold">
                        Cesar Ovies
                        </a> 
                        & <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-brand transition-colors font-semibold">Gemini</a> <i class="fa-solid fa-wand-magic-sparkles text-brand ml-1"></i>
                    </p>
                </div>
                <div class="mt-4 md:mt-0 space-x-4">
                    <a href="./termos-de-uso.html" class="hover:text-slate-300 transition-colors">Termos de Uso</a>
                    <a href="./politica-de-privacidade.html" class="hover:text-slate-300 transition-colors">Política de Privacidade</a>
                </div>
            </div>
        </div>
    </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
