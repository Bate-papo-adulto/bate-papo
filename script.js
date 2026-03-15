
    
        const video = document.getElementById('webcam');
        const startButton = document.getElementById('startButton');
        const messageInput = document.getElementById('messageInput');
        const messagesContainer = document.getElementById('messages');

        // Acessar Câmera e Microfone
        startButton.addEventListener('click', () => {
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                .then((stream) => {
                    video.srcObject = stream;
                    startButton.disabled = true;
                    startButton.innerText = "Conectado";
                })
                .catch((error) => {
                    console.error('Erro ao acessar a câmera/microfone:', error);
                    alert('Não foi possível acessar a câmera ou microfone.');
                });
        });

        // Funcionalidade de Enviar Mensagem
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && messageInput.value.trim() !== "") {
                const message = messageInput.value;
                const messageElement = document.createElement('div');
                messageElement.innerText = "Você: " + message;
                messagesContainer.appendChild(messageElement);
                messageInput.value = '';
                
                // Rolar para o final do chat
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
        });
    
    
    


  
  
  
  
  
  
  
  
  
  
  
  
  
 
function copiarPix() {
  // Substitua pelo seu código Pix "Copia e Cola" real
  const codigoPix = "00020126360014br.gov.bcb.pix0114+55129888491905204000053039865802BR5925GERALDO VAINER NOGUEIRA A6009Sao Paulo62290525REC69AA355F527B037535623263047E98 "; 
  navigator.clipboard.writeText(codigoPix);
  alert("Código Pix copiado! Abra o app do seu banco e cole."); }


        
        
    

    
    
    
    
    

