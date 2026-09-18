"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";

const GLITCH_CHARS = "#@$%&*+-/\\<>!?=~^01";

const FACE_OPEN = `                                                                                       
                                                                                                                      
                                                                                                                      
                                                                                                                      
                                                                                                                      
                                                                                                                      
                                                                                                                      
                                                ----====+=+++=+= =                                                    
                                         =====--::::--:----------======-                                              
                                       =  ====--:::::::.:::::::------------                                           
                                       =====--:::::::::::::::--:::--:::::::--                                         
                                      ====----:::::::::::::::::::::::....::::---                                      
                                      ===---:::::::::::::-:::::..:..::......:::-                                      
                                      =---:::::::::::.::.:::::..:.:..:::.....:::-                                     
                                    ==--::::::::::::::::::::--:::.::.:::::::.:::--                                    
                                  ----::::::::::::::-=--:-=====-::::::::....::-::::                                   
                                ---::::::::::::::::=+++--=+++++==::.:::::::..:::::::                                  
                              -----::::--::::::---=+++===++++++=-:..::::::::.::::::--                                 
                             ----::::..::::::-===++=-===++==--::...::........:..:::--                                 
                             -----::::.....::-=+*+++++===--::::::::::............::---                                
                             ----:::::...::--++++===*#****+==+*=:::-=:.:::....:::::--                                 
                            ------:::....--:-=+=::::--==+***+=-::.............:::::::-                                
                             -----::....::::::::::::::-=+**+=-:::::::........:...:::--                                
                             ----::.....--=+***+=======+***+====--======-::.:.....::::                                
                             :::::::...:+*#**++=----==*#%%#*+=---::::---==::::....:::                                 
                             ----::..:.-*##*=-=-.::-:+#%@@%#+=-:-:.::=-:-----:...::::                                 
                               :-::...:+%%%%%#*++++++*%%@@%#*++=======**###**+:..:::                                  
                               -::.:.:-%%@@@@%%#####%@@@@@@%####*****###%%%%%#-:::::                                  
                               ::-=-::=%@@@@@@@%%%@@@@@@@@@%%%%%%%####%%%%%%%%=:::--:                                 
                                 --+=-=@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%%=:--=--                                 
                                 ::+*--@@@@@@@@@@@@@@@@%%%###%%%%%%%%%%%%%%%%%--==--                                  
                                ---=*%*#%@@@@@@@@@@@%%*+**+++=+#%%%%@%%%%%%%%%+#+*-                                   
                                 ::-#%%%%%%@@@@@@@@@%#+*#*+++++*%%%%%@@%%%%%#%##%#=                                   
                                   -*%%%%%%%@@@@@@@@@%%##+=**##%%%%%%%%%%%%####%%*                                    
                                    ---+%%%%%%@@@@@@@%%%##*#%%%%%%%%%%%%%%###+---                                     
                                      --%%%%%%%%%%%%%%%#**##**#%%%###%%%#####-.--                                     
                                       -*%%%%%%%%%##*+========--=+***#%%####+:.:-                                     
                                        =#%%%%%%%###############*****######*-::--:                                    
                                         +%%%%%%%%%%%%%##**+**#####**#####*+-:---                                     
                                          #%%%%%%%%%###*+===++**##########*+                                          
                                           %%%%%%%%%###*********############                                          
                                           =*%%%%%%%%%%%%%%%%%###%%%#####%%%                                          
                                            *%%%%%%%%%%%%%%%%%%%%%%###*##%%%                                          
                                             %%%#%%%%%%%%%##########***##%%%                                          
                                             %%%%########*******#******##%%%                                          
                                            %%%%%%%#***++======+++****###%%%%                                         
                                           @@%%%%%%%##++=-----==+****####%%%*-                                        
                                         :=%@%%%%%%%#####**+===+**#######%%%%-:::::                                   
                                       -:+%%%%%%%%%%%#####**++++*########%%%#-::..::                                  
                                    -::::*%%%%%%%%%%%%####**++++**#######%%%=:::...::::::::                           
                                 ---:::::-#%%%%%%%%%%%####***+*****######%#+::::....::::.:::::                        
                              ---:::::::::=#%%%%%%%%%%%#####*****#########=:.::......:....:..:::                      
                           ---:::::::::::::=*%%%%%%%%%%%#####***#######*+-:....::.....:.......::::::::                
                        --::::::::::::::::::-+#%%%%%%%%%%%###***##%%#*+-:.....::::.....:.......:::::::::::::          
                      ---:::::::::::::::::::::=*#%%%%%%%%%%######%%%+-.....::::.:::....:::......:::::::::::::::       
                    ----::::::::::::::::::::::::=*%%%%%%%%%%%####*=:.....::::::.::::....::......:::...::.:::::::-     
                 ----::::::.::::::::::::::::::::::::-=*#%%#*+=-:.......::::.:::.:::::...:::......::...:.:::.:::::--   
              -----:::::::..::::::.:::.:::::::::::...................::::...::.:::::::..::........:..:..::.:::::::::-:
            ---:::::::::::..::::::.:::.:::::::::::..................:::....:::.:::::::.:::.........:::..::.:::::::::::
          --::::::::::::::...:::::::::::::::::::::::::.............:::.....:::.:::::::.::::........:::..::.:::::::::::
      -----::::::::::::::.....:::::::::::::::::::::..::::::::.....::::....:::..:::::::.::::........:::.:::.:::::::::::
    --:--::::::::::::::::.....:::::::::.:::::::::::..............::::....:::....::::::.:::::....::.:::.:::.:::::::::::
  ---::::::::::::::::::::.....:::::::::.::::::::::::...........:::::.....::....:::::::.:::::.....::.::.:::.:::::::::::
`;

const FACE_BLINK = `
                                                                                                                      
                                                                                                                      
                                                                                                                      
                                                                                                                      
                                                                                                                      
                                                                                                                      
                                                ----====+=+++=+= =                                                    
                                         =====--::::--:----------======-                                              
                                       =  ====--:::::::.:::::::------------                                           
                                       =====--:::::::::::::::--:::--:::::::--                                         
                                      ====----:::::::::::::::::::::::....::::---                                      
                                      ===---:::::::::::::-:::::..:..::......:::-                                      
                                      =---:::::::::::.::.:::::..:.:..:::.....:::-                                     
                                    ==--::::::::::::::::::::--:::.::.:::::::.:::--                                    
                                  ----::::::::::::::-=--:-=====-::::::::....::-::::                                   
                                ---::::::::::::::::=+++--=+++++==::.:::::::..:::::::                                  
                              -----::::--::::::---=+++===++++++=-:..::::::::.::::::--                                 
                             ----::::..::::::-===++=-===++==--::...::........:..:::--                                 
                             -----::::.....::-=+*+++++===--::::::::::............::---                                
                             ----:::::...::--++++===*#****+==+*=:::-=:.:::....:::::--                                 
                            ------:::....--:-=+=::::--==+***+=-::.............:::::::-                                
                             -----::....::::::::::::::-=+**+=-:::::::........:...:::--                                
                             ----::.....--=+***+=======+***+====--======-::.:.....::::                                
                             :::::::...:+*#**++=----==*#%%#*+=---::::---==::::....:::                                 
                             ----::..:.-*##*=-=-.::-:+#%@@%#+=-:-:.::=-:-----:...::::                                 
                               :-::...:+%%%%%##_______%@@%#*+#%_______*###**+:..:::                                  
                               -::.:.:-%%@@@@%%%_____@@@@@@%####_____##%%%%%#-:::::                                  
                               ::-=-::=%@@@@@@@%%%@@@@@@@@@%%%%%%%####%%%%%%%%=:::--:                                 
                                 --+=-=@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%%=:--=--                                 
                                 ::+*--@@@@@@@@@@@@@@@@%%%###%%%%%%%%%%%%%%%%%--==--                                  
                                ---=*%*#%@@@@@@@@@@@%%*+**+++=+#%%%%@%%%%%%%%%+#+*-                                   
                                 ::-#%%%%%%@@@@@@@@@%#+*#*+++++*%%%%%@@%%%%%#%##%#=                                   
                                   -*%%%%%%%@@@@@@@@@%%##+=**##%%%%%%%%%%%%####%%*                                    
                                    ---+%%%%%%@@@@@@@%%%##*#%%%%%%%%%%%%%%###+---                                     
                                      --%%%%%%%%%%%%%%%#**##**#%%%###%%%#####-.--                                     
                                       -*%%%%%%%%%##*+========--=+***#%%####+:.:-                                     
                                        =#%%%%%%%###############*****######*-::--:                                    
                                         +%%%%%%%%%%%%%##**+**#####**#####*+-:---                                     
                                          #%%%%%%%%%###*+===++**##########*+                                          
                                           %%%%%%%%%###*********############                                          
                                           =*%%%%%%%%%%%%%%%%%###%%%#####%%%                                          
                                            *%%%%%%%%%%%%%%%%%%%%%%###*##%%%                                          
                                             %%%#%%%%%%%%%##########***##%%%                                          
                                             %%%%########*******#******##%%%                                          
                                            %%%%%%%#***++======+++****###%%%%                                         
                                           @@%%%%%%%##++=-----==+****####%%%*-                                        
                                         :=%@%%%%%%%#####**+===+**#######%%%%-:::::                                   
                                       -:+%%%%%%%%%%%#####**++++*########%%%#-::..::                                  
                                    -::::*%%%%%%%%%%%%####**++++**#######%%%=:::...::::::::                           
                                 ---:::::-#%%%%%%%%%%%####***+*****######%#+::::....::::.:::::                        
                              ---:::::::::=#%%%%%%%%%%%#####*****#########=:.::......:....:..:::                      
                           ---:::::::::::::=*%%%%%%%%%%%#####***#######*+-:....::.....:.......::::::::                
                        --::::::::::::::::::-+#%%%%%%%%%%%###***##%%#*+-:.....::::.....:.......:::::::::::::          
                      ---:::::::::::::::::::::=*#%%%%%%%%%%######%%%+-.....::::.:::....:::......:::::::::::::::       
                    ----::::::::::::::::::::::::=*%%%%%%%%%%%####*=:.....::::::.::::....::......:::...::.:::::::-     
                 ----::::::.::::::::::::::::::::::::-=*#%%#*+=-:.......::::.:::.:::::...:::......::...:.:::.:::::--   
              -----:::::::..::::::.:::.:::::::::::...................::::...::.:::::::..::........:..:..::.:::::::::-:
            ---:::::::::::..::::::.:::.:::::::::::..................:::....:::.:::::::.:::.........:::..::.:::::::::::
          --::::::::::::::...:::::::::::::::::::::::::.............:::.....:::.:::::::.::::........:::..::.:::::::::::
      -----::::::::::::::.....:::::::::::::::::::::..::::::::.....::::....:::..:::::::.::::........:::.:::.:::::::::::
    --:--::::::::::::::::.....:::::::::.:::::::::::..............::::....:::....::::::.:::::....::.:::.:::.:::::::::::
  ---::::::::::::::::::::.....:::::::::.::::::::::::...........:::::.....::....:::::::.:::::.....::.::.:::.:::::::::::
`;

const PHRASES = [
  "¡Hola! Parece que estás viendo mi portafolio...",
  "Puedes arrastrar las ventanas por la cabecera. No sirve de mucho pero mola.",
  "Full Stack Developer. Sobre todo, React y TypeScript.",
  "¿Ya has visto la sección de Proyectos?",
  "No, no busques Internet Explorer que no lo vas a encontrar.",
  "Mi CV real está en el escritorio, por si quieres descargarlo.",
  "Si esto se congela, no es un bug, es nostalgia.",
  "No tengo cuerpo, pero tengo personalidad. Es un ahorro de CSS.",
  "Si parpadeo muy rápido, es que estoy encerrado. Auxilio.",
  "Si me haces clic en la nariz, no pasa nada. Lo prometo.",
];

// Posición del hotspot invisible sobre la "nariz" del retrato, como
// porcentaje del ancho/alto del bloque <pre>. Igual que con la boca: este
// retrato es un render foto-realista, no un dibujo con rasgos definidos,
// así que es una estimación. Ajusta NOSE_TOP / NOSE_LEFT si el punto
// clicable no cae sobre la nariz en tu pantalla.
const NOSE_TOP = "30%";
const NOSE_LEFT = "50%";

/** Texto de la pantalla azul, estilo clásico Windows XP (parodia/homenaje). */
const BSOD_LINES = [
  "A problem has been detected and Windows has been shut down to prevent damage to your computer.",
  "",
  "PORTFOLIO_TOO_AWESOME",
  "",
  "If this is the first time you've seen this Stop error screen, restart your computer.",
  "If this screen appears again, follow these steps:",
  "",
  "Check to make sure any new hardware or software is properly installed. If this is a new installation,",
  "ask your hardware or software manufacturer for any updates you might need.",
  "",
  "If problems continue, disable or remove any newly installed hardware or software. Disable BIOS memory options such as",
  "caching or shadowing. If you need to use Safe Mode to remove or disable components, restart your computer, press F8 to select",
  "Advanced Startup Options, and then select Safe Mode.",
  "",
  "Technical information:",
  "",
  "*** STOP: 0x0000DEAD (0x0GABRIEL, 0x00ARGENTE, 0x00000000, 0x00CV2026)",
  "",
  "",
  "Collecting data for crash dump...",
  "Initializing physical memory disk driver...",
  "Physical memory disk 0 initialized.",
  "Beginning dump of physical memory...",
  "Dumping physical memory to disk: 14%",
  "Dumping physical memory to disk: 42%",
  "Dumping physical memory to disk: 89%",
  "Dumping physical memory to disk: 100%",
  "Physical memory dump complete.",
  "",
  "Contact Gabriel Argente for further assistance. O simplemente haz clic en cualquier sitio para volver al escritorio."
];

/** Pantallazo azul (BSOD) estilo Windows XP, a pantalla completa. */
function BlueScreenOfDeath({ onDismiss }: { onDismiss: () => void }) {
  const [linesCount, setLinesCount] = useState(0);

  // Efecto para cerrar con cualquier tecla
  useEffect(() => {
    function handleKeyDown() {
      onDismiss();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onDismiss]);

  // Efecto de escritura progresiva de líneas
  useEffect(() => {
    if (linesCount < BSOD_LINES.length) {
      // Las primeras 24 líneas (texto de error) aparecen casi al instante
      // A partir de la línea 24 (procesos) simulamos latencia de disco
      const isProcessLine = linesCount >= 24;
      const baseDelay = isProcessLine ? 300 : 10;
      const randomDelay = isProcessLine ? Math.random() * 600 : 0;

      const timer = setTimeout(() => {
        setLinesCount((prev) => prev + 1);
      }, baseDelay + randomDelay);

      return () => clearTimeout(timer);
    }
  }, [linesCount]);

  return (
    <div
      role="alertdialog"
      aria-label="Pantalla azul de la muerte (easter egg)"
      onClick={onDismiss}
      className="fixed inset-0 z-[9999] flex cursor-pointer items-start justify-center overflow-auto bg-[#0000AA] p-6 text-white sm:p-16"
    >
      <pre className="max-w-[850px] whitespace-pre-wrap font-mono text-[13px] leading-relaxed sm:text-[15px]">
        {BSOD_LINES.slice(0, linesCount).join("\n")}
        {/* Cursor parpadeante retro mientras "escribe" o procesa */}
        {linesCount < BSOD_LINES.length && (
          <span className="animate-pulse">_</span>
        )}
      </pre>
    </div>
  );
}

/**
 * Asistente ASCII: cara grande dibujada con caracteres, con nombre y cargo a
 * la izquierda, un bocadillo de frases rotando debajo del cargo, y un
 * easter egg: al hacer clic en la nariz salta una pantalla azul estilo
 * Windows XP (clic o cualquier tecla para volver al escritorio).
 */
export default function AsciiAssistant() {
  const [blinking, setBlinking] = useState(false);
  const [currentAscii, setCurrentAscii] = useState(FACE_OPEN);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(true);
  const [showBSOD, setShowBSOD] = useState(false);

  // Control de parpadeo
  useEffect(() => {
    const interval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 180);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Efecto de randomización constante de caracteres (Glitch ASCII)
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const baseFace = blinking ? FACE_BLINK : FACE_OPEN;

      const chars = baseFace.split("");

      const numGlitches = Math.floor(chars.length * 0.03);

      for (let i = 0; i < numGlitches; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);

        if (chars[randomIndex] !== "\n" && chars[randomIndex] !== " ") {
          const randomChar =
            GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          chars[randomIndex] = randomChar;
        }
      }

      setCurrentAscii(chars.join(""));
    }, 120);

    return () => clearInterval(glitchInterval);
  }, [blinking]);

  // Rotación de frases estilo Clippy
  useEffect(() => {
    const phraseInterval = setInterval(() => {
      // Oculta el mensaje suavemente
      setShowMessage(false);

      setTimeout(() => {
        // Selecciona una frase aleatoria
        setCurrentPhraseIndex((prevIndex) => {
          let nextIndex;
          do {
            nextIndex = Math.floor(Math.random() * PHRASES.length);
          } while (nextIndex === prevIndex);
          return nextIndex;
        });
        // Vuelve a mostrarlo
        setShowMessage(true);
      }, 300);
    }, 8000); // Cambia cada 8 segundos

    return () => clearInterval(phraseInterval);
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 translate-x-[100px] bottom-[3%] hidden -translate-y-1/5 items-center sm:flex"
      >
        {/* Contenedor de Información: relative para anclar el bocadillo debajo */}
        <div className="relative select-none max-w-[600px] text-right -translate-y-28 translate-x-[150px]">
          <p className="font-[Windows95] text-[90px] font-bold text-white [text-shadow:0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.2),0_0_30px_rgba(255,255,255,0.2)]">
            {profile.name}
          </p>
          <p className="font-[Windows95] mt-1 text-[20px] font-semibold uppercase tracking-widest text-white/85 [text-shadow:0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.2),0_0_30px_rgba(255,255,255,0.2)]">
            {profile.role}
          </p>

          {/* Bocadillo de diálogo: debajo del cargo, flecha en el lado derecho */}
          <div
            className={`
              absolute top-[230px] left-[270px] z-20 mt-6 w-[320px] max-w-[320px]
              rounded-lg border-2 border-black bg-[#ffffcc] p-5 text-left text-black
              shadow-[4px_4px_0px_rgba(0,0,0,0.5)] transition-opacity duration-300
              ${showMessage ? "opacity-100" : "opacity-0"}
            `}
          >
            <p className="font-[Windows95] text-[20px] leading-snug font-medium text-black">
              {PHRASES[currentPhraseIndex]}
            </p>

            {/* Flecha en el lado derecho, apuntando hacia el ASCII */}
            <div className="absolute -right-[16px] top-1/4 -translate-y-1/2 h-0 w-0 border-y-[12px] border-y-transparent border-l-[16px] border-l-black" />
            <div className="absolute -right-[13px] top-1/4 -translate-y-1/2 h-0 w-0 border-y-[10px] border-y-transparent border-l-[14px] border-l-[#ffffcc]" />
          </div>
        </div>

        {/* Personaje ASCII con caracteres randomizándose */}
        <div className="relative">
          <pre
            className="
              select-none
              font-mono text-[12px] leading-[1.05] text-white whitespace-pre
              md:text-[13px]
              animate-[ascii-float_6s_ease-in-out_infinite,ascii-breathe_4s_ease-in-out_infinite]
            "
            style={{
              filter:
                "drop-shadow(0 0 10px rgb(240, 229, 229)) drop-shadow(0 0 20px rgba(10, 10, 10, 1))",
            }}
          >
            {currentAscii}
          </pre>

          {/* Hotspot invisible sobre la nariz: dispara el pantallazo azul.
              Nota de accesibilidad: como todo el bloque padre es
              aria-hidden (decorativo), este easter egg es intencionadamente
              solo para ratón/touch, igual que el resto del personaje. */}
          <button
            type="button"
            onClick={() => setShowBSOD(true)}
            aria-hidden="true"
            tabIndex={-1}
            className="pointer-events-auto absolute h-12 w-12 -translate-x-1/2 -translate-y-[-150px] cursor-pointer rounded-full bg-transparent"
            style={{ top: NOSE_TOP, left: NOSE_LEFT }}
            title="???"
          />
        </div>
      </div>

      {showBSOD && <BlueScreenOfDeath onDismiss={() => setShowBSOD(false)} />}
    </>
  );
}
