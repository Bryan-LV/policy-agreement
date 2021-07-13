
import PolicyAgreement from "./policy-agreement";

(function(storageType){
    window.onload = function(e) {
            // on page load check if localstorage has setcookies key
            let config = {
                storageType: storageType,
                key:'setcookies'
            };

            let policyAgreement = new PolicyAgreement(config);
            
            // if not, show policy agreement
            let state = policyAgreement.checkState();

            if(!state){
                let policyPopup = document.querySelector('#policy_popup');

                setTimeout(() => {
                    policyPopup.classList.add('show');
                }, 1500);

                policyPopup.addEventListener('click', e => {
                    if(e.target.id === 'agree') {
                        policyAgreement.accept('accepted');
                        policyPopup.classList.remove('show');

                    } else if (e.target.id === 'disagree') {
                        policyPopup.classList.remove('show');
                    }
                })
            }
        }
}('localStorage'))