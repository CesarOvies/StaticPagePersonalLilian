class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <footer class="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
                <div class="text-center md:text-left">
                    <a href="./index.html" class="text-2xl font-extrabold text-white tracking-tighter mb-4 block">
                        LILIAN<span class="text-brand">MOREIRA</span>
                    </a>
                    <p class="text-slate-400 text-sm max-w-xs">
                        Treinamento físico estruturado e natação especializada para transformar sua vida através do movimento.
                    </p>
                    <p class="text-xs text-brand-light font-semibold mt-2.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-id-card"></i> CREF 177118-G/SP
                    </p>
                </div>
                
                <div class="text-center md:text-right">
                    <h4 class="text-white font-bold mb-4">Contatos</h4>
                    <div class="space-y-2 text-slate-400 text-sm">
                        <p><i class="fa-solid fa-location-dot mr-2 text-brand"></i> Atendimento em Santos & São Vicente - SP</p>
                        <p><i class="fa-regular fa-envelope mr-2"></i> lilianmoreira2@icloud.com</p>
                        <p><a href="https://wa.me/5513996660817?text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20site%20para%20bater%20um%20papo%20sobre%20treinamento%20particular." target="_blank" rel="noopener noreferrer" class="hover:text-brand transition-colors"><i class="fa-brands fa-whatsapp mr-2"></i> Agendar pelo WhatsApp</a></p>
                        <p><a href="https://share.google/c8XepCzhuYQiu3qbu" target="_blank" rel="noopener noreferrer" class="hover:text-brand transition-colors inline-flex items-center"><i class="fa-brands fa-google mr-2 text-brand"></i> Avalie no Google Maps</a></p>
                    </div>
                    
                    <div class="flex gap-4 justify-center md:justify-end mt-6">
                        <a href="https://www.instagram.com/lili.wp" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand hover:text-slate-900 transition-all" title="Instagram @lili.wp" aria-label="Instagram">
                            <i class="fa-brands fa-instagram text-xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/lilian-moreira-farias-231123375/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand hover:text-slate-900 transition-all" title="LinkedIn" aria-label="LinkedIn">
                            <i class="fa-brands fa-linkedin-in text-xl"></i>
                        </a>
                        <a href="https://share.google/c8XepCzhuYQiu3qbu" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand hover:text-slate-900 transition-all" title="Avalie no Google Maps" aria-label="Google Maps">
                            <i class="fa-brands fa-google text-lg"></i>
                        </a>
                    </div>
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
