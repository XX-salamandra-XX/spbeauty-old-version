//import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column gap-5 mt-1 col roundTrip px-4 py-4 justify-content-between'>
            <div>
              <div className='title'>Адреса заведений</div>
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
                    <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
    );
}

export default Addresses;