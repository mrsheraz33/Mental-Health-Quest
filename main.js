  let currentStep = 1;
        let selectedPersona = '';
        let acceptedStrategies = [];

        function selectPersona(persona) {
            selectedPersona = persona;
            document.querySelectorAll('.persona-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            event.target.classList.add('selected');
        }

        function selectOption(button, value) {
            const parent = button.parentElement;
            const cards = parent.querySelectorAll('.option-card');
            cards.forEach(card => card.classList.remove('selected'));
            button.classList.add('selected');
        }

        function acceptStrategy(button) {
            const strategyItem = button.closest('.strategy-item');
            strategyItem.style.borderColor = '#4CAF50';
            strategyItem.style.background = '#f0f9f0';
            acceptedStrategies.push(strategyItem.querySelector('h4').textContent);
        }

        function rejectStrategy(button) {
            const strategyItem = button.closest('.strategy-item');
            strategyItem.style.opacity = '0.5';
            strategyItem.style.borderColor = '#f44336';
        }

        function nextStep() {
            if (currentStep < 4) {
                document.getElementById(`step${currentStep}`).classList.remove('active');
                currentStep++;
                document.getElementById(`step${currentStep}`).classList.add('active');
                document.getElementById('prevBtn').style.display = 'block';
                
                // Update progress bar
                document.getElementById('progress').style.width = `${(currentStep / 4) * 100}%`;
                
                if (currentStep === 4) {
                    document.getElementById('nextBtn').style.display = 'none';
                }
            }
        }

        function previousStep() {
            if (currentStep > 1) {
                document.getElementById(`step${currentStep}`).classList.remove('active');
                currentStep--;
                document.getElementById(`step${currentStep}`).classList.add('active');
                document.getElementById('progress').style.width = `${(currentStep / 4) * 100}%`;
                document.getElementById('nextBtn').style.display = 'block';
                
                if (currentStep === 1) {
                    document.getElementById('prevBtn').style.display = 'none';
                }
            }
        }

        function launchQuest() {
            alert('🎉 Your Quest Has Begun!\n\nYou will receive:\n• Daily AI check-ins\n• Mentor support\n• Community access\n• Progress tracking\n\nTransform your life with data-backed guidance!');
        }