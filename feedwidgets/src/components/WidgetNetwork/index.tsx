import {
    GithubLogo,
    InstagramLogo,
    TwitterLogo,
    DiscordLogo,
    LinkedinLogo,
    TelegramLogo
} from "phosphor-react";
import { CloseButton } from "../CloseButton";
import {Footer} from "../Footer";



export function WidgetNetworks() {
    const clickGH = () => {
        window.open("https://github.com/CaduAzeredo");
    };
    const clickIN = () => {
        window.open("https://www.instagram.com/azeredo.dev_/");
    };
    const clickTW = () => {
        window.open("https://twitter.com/AzeredoDev");
    };
    const clickDS = () => {
        window.open("https://discord.com/channels/327861810768117763/972090544887054336");
    };
    const clickLI = () => {
        window.open("https://www.linkedin.com/in/carlos-eduardoaz/");
    };
    const clickTE = () => {
        window.open("https://t.me/AzeredoDev");
      };

    return (
        <div className="bg-zinc-900 p-4 rounded-2xl mb-4 flex flex-col w-64 items-center shadow-lg">
            <header>
                <span className="flex text-xl leading-6">Clique e Conecte</span>
                <CloseButton />
            </header>
            
            <div className="grid grid-cols-3 py-7 gap-4 w-full">
                <button
                   type="button"
                   onClick={clickGH}
                   className="bg-blue-700 rounded-lg py-3 w-auto flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-blue-100 focus:border-blue-100 focus:outline-none"
                >
                    <GithubLogo className="h-8 w-8" />    
                </button>
            <button
                   type="button"
                   onClick={clickLI}
                   className="bg-blue-700 rounded-lg py-3 w-auto flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-100 focus:border-green-100 focus:outline-none"
                >
                    <InstagramLogo className="h-8 w-8" />    
                </button>


                <button
                   type="button"
                   onClick={clickTW}
                   className="bg-blue-700 rounded-lg py-3 w-auto flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-blue-100 focus:border-blue-100 focus:outline-none"
                >
                    <TwitterLogo className="h-8 w-8" />    
                </button>

                
                <button
                   type="button"
                   onClick={clickDS}
                   className="bg-blue-700 rounded-lg py-3 w-auto flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-blue-100 focus:border-blue-100 focus:outline-none"
                >
                    <DiscordLogo className="h-8 w-8" />    
                </button>
                
                
                <button
                   type="button"
                   onClick={clickIN}
                   className="bg-blue-700 rounded-lg py-3 w-auto flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-blue-100 focus:border-blue-100 focus:outline-none"
                >
                    <LinkedinLogo className="h-8 w-8" />   
                </button>

                <button
                   type="button"
                   onClick={clickTE}
                   className="bg-blue-700 rounded-lg py-3 w-auto flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-blue-100 focus:border-blue-100 focus:outline-none"
                >
                    <TelegramLogo className="h-8 w-8" />   
                </button>
            </div>
            <Footer />
        </div>
    );
}