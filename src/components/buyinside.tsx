import React from "react";
import {AiOutlineInstagram}  from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { FaFacebookSquare} from "react-icons/fa"
import InsideEng from "./buyinsideEng";


 
export default function Inside(){
    return(
        
          
          <div className="payment-details">

          <h1 className="pay font-montserrat sm:text-lg lg:text-xl font-semibold dark:text-slate-50 sm:mb-2 2xl:text-3xl ">გადახდა და მიტანის სერვისი</h1>
          <div className="icons flex  my-4 ">
           <span className="dark:text-white text-4xl mr-2 ">
            <a href="https://www.facebook.com/profile.php?id=100090746907327"><FaFacebookSquare/></a>
          </span>
          <span className="dark:text-white text-[44px] mx-2 -mt-[3px] ">
            <a href="https://www.instagram.com/kocomist/"><AiOutlineInstagram /></a>
          </span> 
          <span className="dark:text-white text-[40px] ml-[6px] -mt-[1px] "><a href="tel:123456789"><AiOutlineWhatsApp /></a>
            
          </span> 
          </div>
          
          
          <p className=" font-montserrat sm:text-xs lg:text-base text-black dark:text-slate-50 sm:mb-2 2xl:text-xl font-bold">პროდუქტის შესაძენად დაუკავშირდით ჩვენს ოპერატორს ზემოთ მოცემულ
სიმბოლოზე დაჭერის საშუალებით (Facebook, Instagram, WhatsApp-ზე) , გადახდა შეგიძლიათ
კომპანიის ანგარიშზე თანხის გადარიცხვით. </p>

          <div className="icons flex flex-row">
           
          </div>
          <h1 className="pay font-montserrat sm:text-lg lg:text-xl font-semibold dark:text-slate-50 sm:mb-2 mt-2 2xl:text-3xl">მიწოდება თბილისის მაშტაბით</h1>
          <ul>
            <li className="list-disc sm:text-xs ml-5 lg:text-base 2xl:text-xl text-black dark:text-slate-300	">მიტანის ღირებულება თბილისის მაშტაბით<span className="font-semibold"> უფასოა</span></li>
            <li className="list-disc sm:text-xs ml-5 lg:text-base 2xl:text-xl text-black dark:text-slate-300">მიტანის სერვისი მუშაობს ორშაბათიდან პარასკევის ჩათვლით 11:00 – 20:00</li>
            <li className="list-disc sm:text-xs ml-5 lg:text-base 2xl:text-xl text-black dark:text-slate-300">მიწოდება ხდება შეკვეთის გაფორმებიდან 2 სამუშაო დღის მანძილზე</li>
          </ul>
          <h1 className="pay font-montserrat sm:text-lg lg:text-xl font-semibold dark:text-slate-50 sm:mb-6 mt-2 2xl:text-3xl ">მიწოდება საქართველოს მაშტაბით</h1>
          <ul>
            <li className="list-disc sm:text-xs ml-5 lg:text-base 2xl:text-xl text-black dark:text-slate-300	">
            საქართველოს მაშტაბით პროდუქტის მიწოდება ხორციელდება საქართველოს ფოსტით.
შეკვეთის შესრულებიდან მეორე სამუშაო დღეს ხდება შეკვეთის გადაცემა
საქართველოს ფოსტაზე, რომლის ტრანსპორტირების საშუალო დრო 2-3 სამუშაო დღეს
შეადგენს. გზავნილის მისაღებად უნდა მიბრძანდეთ საქართველოს ფოსტის შესაბამის
ფილიალში. ტრანსპორტირების ღირებულებას იხდით ამანათის აღებისას გზავნილის
წონის მიხედვით.
            </li>
          </ul>
          </div>  


    )
}