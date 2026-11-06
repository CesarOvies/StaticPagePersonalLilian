class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <footer class="bg-[#0a0a0a] text-neutral-400 border-t border-neutral-800 pt-16 pb-10 text-sm">
        <div class="wrap">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 items-start">
                <!-- Coluna 1: Identidade -->
                <div class="text-left">
                    <a href="./index.html" class="font-display text-2xl text-white tracking-tight mb-3 block">
                        Lilian Moreira
                    </a>
                    <p class="text-neutral-400 text-sm max-w-xs leading-relaxed">
                        Personal trainer e aulas particulares de natação em Santos e São Vicente. Atendimento em condomínios e academias.
                    </p>
                    <p class="text-xs text-neutral-400 font-medium mt-4 flex items-center gap-1.5">
                        <i class="fa-solid fa-id-card text-[#2b8a4d]" aria-hidden="true"></i> CREF4/SP 177118-G/SP
                    </p>
                </div>
                
                <!-- Coluna 2: Contatos & Redes Sociais -->
                <div class="text-left">
                    <h4 class="text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-4">Contatos</h4>
                    <div class="space-y-3 text-neutral-400 text-sm">
                        <p class="flex items-center gap-2.5">
                            <i class="fa-solid fa-location-dot text-[#2b8a4d] shrink-0" aria-hidden="true"></i>
                            <span>Santos e São Vicente – SP</span>
                        </p>
                        <p class="flex items-center gap-2.5">
                            <i class="fa-regular fa-envelope text-[#2b8a4d] shrink-0" aria-hidden="true"></i>
                            <span>lilianmoreira2@icloud.com</span>
                        </p>
                        <p class="flex items-center gap-2.5">
                            <i class="fa-brands fa-whatsapp text-[#2b8a4d] shrink-0" aria-hidden="true"></i>
                            <a href="https://wa.me/5513996660817?text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20site%20para%20bater%20um%20papo%20sobre%20treinamento%20particular." target="_blank" rel="noopener noreferrer" class="text-neutral-300 hover:text-white transition-colors underline underline-offset-4 decoration-neutral-700">
                                Conversar no WhatsApp
                            </a>
                        </p>
                    </div>
                    
                    <div class="flex gap-3 mt-6">
                        <a href="https://www.instagram.com/lili.wp" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors" title="Instagram @lili.wp" aria-label="Instagram">
                            <i class="fa-brands fa-instagram text-base" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/lilian-moreira-farias-231123375/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors" title="LinkedIn" aria-label="LinkedIn">
                            <i class="fa-brands fa-linkedin-in text-sm" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                <!-- Coluna 3: Card "Avalie no Google Maps" -->
                <div class="flex md:justify-end">
                    <a href="https://share.google/c8XepCzhuYQiu3qbu" target="_blank" rel="noopener noreferrer"
                        class="lift group block w-full max-w-xs bg-neutral-900/90 hover:bg-neutral-900 p-5 rounded-[16px] border border-neutral-800 hover:border-neutral-700 text-left">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center gap-2.5">
                                <div class="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0">
                                    <svg class="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                                    </svg>
                                </div>
                                <div>
                                    <span class="text-xs font-semibold text-white block leading-tight">Google Maps</span>
                                    <span class="text-[11px] text-neutral-400">Perfil verificado</span>
                                </div>
                            </div>
                            <span class="inline-flex items-center gap-1 text-[11px] font-medium text-[#2b8a4d] bg-[#1f6b3a]/15 border border-[#1f6b3a]/30 px-2 py-0.5 rounded-full">
                                <i class="fa-solid fa-circle-check text-[9px]" aria-hidden="true"></i> Ativo
                            </span>
                        </div>

                        <p class="text-neutral-400 text-xs mb-4 leading-relaxed">
                            Já treinou ou teve aulas com a Lilian? Deixe sua avaliação no Google Maps.
                        </p>

                        <div class="inline-flex items-center justify-between w-full py-2.5 px-3 bg-neutral-800 text-neutral-300 group-hover:bg-[#1f6b3a] group-hover:text-white rounded-lg text-xs font-medium transition-colors">
                            <span>Avaliar no Google</span>
                            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]" aria-hidden="true"></i>
                        </div>
                    </a>
                </div>
            </div>
            
            <div class="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4 text-center md:text-left">
                <div class="space-y-1">
                    <p>&copy; 2026 Lilian Moreira Farias • CREF4/SP 177118-G/SP. Todos os direitos reservados.</p>
                    <p>
                        Desenvolvido por 
                        <a href="https://linkedin.com/in/cesarovies" target="_blank" rel="noopener noreferrer" class="text-neutral-400 hover:text-white transition-colors font-medium underline underline-offset-4 decoration-neutral-700">
                            Ovies Tech
                        </a>
                    </p>
                </div>
                <div class="space-x-4">
                    <a href="./termos-de-uso.html" class="hover:text-neutral-300 transition-colors">Termos de Uso</a>
                    <a href="./politica-de-privacidade.html" class="hover:text-neutral-300 transition-colors">Política de Privacidade</a>
                </div>
            </div>
        </div>
    </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
