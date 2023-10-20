import CharacterMovible from "../../../IntComponents/CharacterMovible/CharacterMovible";
import Acces from "../../../IntComponents/DivAcces/DivAcces";
import { divForCharacterMovible } from "../../../helpers/tailwilndConsts";

const HomeInt = () => {
    return(
        <main className="w-[330px] sm:w-[600px] md:w-[720px] lg:w-[950px] xl:w-[1200px] bg-lime-400 xl:bg-orange-400 lg:bg-red-300 md:bg-red-700 sm:bg-yellow-200 h-full p-[20px]">
         <CharacterMovible/>
         <section>
            <Acces title="Projects"/>
            <Acces title="About"/>
            <Acces title="Contact"/>
        </section>   
    </main>
    )
}

export default HomeInt;