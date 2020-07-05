import 'module-alias/register';
import TravelForm from "model/travel-homepage/travel-form";

const router = require('lib/router');
const url = router.getUrlTravel();

fixture `Booking Hotel`
  .page `${url}`

test(`guest book an expensive hotel AND the most expensive room.`, async t => {
  await t
    .click(TravelForm.hotelDestination)
    .typeText(TravelForm.searchHotel, 'Bandung')
    .click(TravelForm.searchHotel).pressKey('enter')
    .click(TravelForm.dateCheckIn).pressKey('ctrl+a delete')
  await TravelForm.checkIn()
  await t
    .click(TravelForm.dateCheckIn).pressKey('esc')
    .click(TravelForm.dateCheckOut).pressKey('ctrl+a delete')
  await TravelForm.checkOut(3)
  await t
    .click(TravelForm.dateCheckOut).pressKey('esc')
    .click(TravelForm.addChild)
    .click(TravelForm.submit)
    .click(TravelForm.filterHigh)
});