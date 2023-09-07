const translations = {
    en: {
        name: "IBRAHEM SA" ,
        work:"Web Designer",
        aboutme:"About Me",
        ImGOOD:"What I'm good at",
        mywork:"My Work",
        contantme:"Contact Me",
        // Copyright:"Copyright @ Ibrahim SA Design",
        howami:"I'm Ibahim Saad Alden and I'm studing IT at Al Sham Private Unversity. I am a Syrian young man living in Damascus",
        
        

    },
    ar: {
        name: "ابؤاهيم سعد الدين" ,
        work:"مصمم ويب",
        aboutme:"من أكون",
        ImGOOD:"خبراتي",
        mywork:"اعمالي",
        contantme:"تواصل معي",
        // Copyright:"",
        howami:"انا شاب سوري اقيم في دمشق-المهاجرين. وادرس في جامعة الشام الخاصة ",
        
        

    },



};
const languagesEdite = document.getElementsByClassName("g1-list-items-3");
const LinkLanguageAr = document.getElementById("AR");
const LinkLanguageEn = document.getElementById("EN");
// languagesEdite:addEventListener("change", (event) => {
//     setLanguage(event.target.id);
// });
LinkLanguageAr:addEventListener("click", (event) => {
    setLanguage(event.target.id);
}); 
const setLanguage = (language) =>{  
    const elements = document.querySelectorAll("[data-i18n]")
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-i18n");
        element.textContent = translations[language[/translationKey]];
        // console.log(translationKey);
        
    });
};

