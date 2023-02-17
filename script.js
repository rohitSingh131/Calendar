$(document).ready(function () {
  $("#calendar").evoCalendar({
    // theme: "Default",
    theme: "Midnight Blue",
    // theme: "Orange Coral",
    // theme: "Royal Navy",

    calendarEvents: [
      {
        id: "event1", // Event's ID (required)
        name: "New Year", // Event name (required)
        date: "January/1/2023", // Event date (required)
        description:
          "New Year festival, any of social, cultural, and religious observaces worldwide that celebrate the beginning of the new year. Such festivals are among the oldest and the most universally observed.",
        type: "holiday", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        name: "Happy Republic Day ", // Event name (required)
        date: "January/26/2023", // Event date (required)
        description:
          "Republic Day is a nation holiday in India , When the country marks and celebrates the date on which the Constitution of India come into effect on 26 January 1950, replacing the Government of India Act as the governing document of India and turning the nation into a newly formed republic.",
        type: "holiday", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        name: "Maha Shivaratri",
        badge: "02/18", // Event badge (optional)
        date: "February/18/2023", // Date range
        description:
          " Maha Shivaratri is a Hindu festival celebrateed annually in honour of the god Shiva. The name also refers to the night when Lord Shiva Performs the heavenly dance.",
        type: "event",
        color: "#63d867", // Event custom color (optional)
      },
      {
        name: "Chhatrapati Shivaji Maharaj Jayanti",
        badge: "02/19", // Event badge (optional)
        date: "February/19/2023", // Date range
        description:
          " Chhatrapati Shivaji Maharaj Jayanti is a festival. This festival is celebrated on February 19, celebrating the birth anniversary of Shivaji Maharaj, the first Chhatrapati and founder of the Maratha Empire. Chhatrapati Shivaji Maharaj is regarded as one of the bravest rulers of India who was responsible for standing up against Aurangzeb, the Mugal emperor.",
        type: "event",
        color: "#63d867", // Event custom color (optional)
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "event2", // Event's ID (required)
        name: "National Science Day ",
        badge: "02/28", // Event badge (optional)
        date: "February/28/2023", // Date range
        description:
          " National Science Day is celebrated in India on 28 February each year to mark the discovery of the Raman effect by Indian Physicist Sir C. V. Raman on 28 February 1928. For his discovery, Sir C. V. Raman was awarded the nobal price in Physics in 1930.",
        type: "event",
        // color: "#63d867", // Event custom color (optional)
        everyYear: true, // Same event every year (optional)
      },
      {
        name: "Holika Dahan ",
        badge: "03/07", // Event badge (optional)
        date: "March/07/2023", // Date range
        description:
          " Holika Dahan also Kamudu pyre is celebrated by burinig holika, an asuri. For many tradition in Hinduism, Holi celebrates the victory of the good or evil.",
        type: "event",
        color: "#63d867", // Event custom color (optional)
      },
      {
        name: "Holi",
        badge: "03/08", // Event badge (optional)
        date: "March/08/2023", // Date range
        description:
          "Holi is a Popular ancient Indian festival, also known as the 'festival of Love' the 'Festival of Colours' and the 'festival of Spring'. The celebrates the eternal and divine love of Radha Krishna.",
        type: "event",
        color: "#63d867", // Event custom color (optional)
      },
      {
        id: "event3", // Event's ID (required)
        name: "Ambedkar Jayanti",
        badge: "04/14", // Event badge (optional)
        date: "April/14/2023", // Date range
        description:
          "Ambedkar Jayanti or Bhim Jayanti is an annual festival oberved on 14 April to commeemorate the memory of B. R. Ambedkar, Indian polymath and civil rights activist. It marks Dr. Babasaheb Ambedkar's birthday who was born on 14 April 1891. Since 2015 it has been obserbved as an official public holiday thoughtout India.",
        type: "event",
        // color: "#63d867", // Event custom color (optional)
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "event4", // Event's ID (required)
        name: "Rohit's Birthday",
        badge: "05/09", // Event badge (optional)
        date: "May/09/2023", // Date range
        description:
          "The only day in my life..My Mother smiled when i cried..Getting older but my inner child is ageless. Don't worry about your age, you get a new one every year.This is my year of dreams coming true.",
        type: "event",
        // color: "#63d867", // Event custom color (optional)
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "event5", // Event's ID (required)
        name: "Independence Day",
        badge: "08/15", // Event badge (optional)
        date: "August/15/2023", // Date range
        description:
          "Independence Day is celebrated annually on 15 August as a Public Holiday in India commemorating the nation's indipendence from the United Kingdom on 15 August 1947, the day when the provisions of the Indian Indipendence Act, which transferred legislative sovereignty to the Indian Constituent Assembly, came into effect.",
        type: "Holiday",
        // color: "#63d867", // Event custom color (optional)
        everyYear: true, // Same event every year (optional)
      },
      {
        name: "Raksha Bandhan",
        badge: "08/30", // Event badge (optional)
        date: "August/30/2023", // Date range
        description:
          "Raksha Bandhan, is a popular, traditionallly Hindu, annual rite, or ceremony, which is central to a festival of the same name celebrated in South Asia, and in other parts of the world significiently influenced by  Hindu culture.",
        type: "Holiday",
        color: "#63d867", // Event custom color (optional)
      },
      {
        name: "Krishna Janmashtami",
        badge: "09/06", // Event badge (optional)
        date: "September/06/2023", // Date range
        description:
          "Krishna Janmashtami lit. 'Occasion of the birth of Krishna' , also known simply as Krishnashtami, Janmashtami, or Gokulashtami, is an annual Hindu festival that celebrate the birth of Krishna, the eighth avatar of Vishnu.",
        type: "Holiday",
        color: "#63d867", // Event custom color (optional)
      },
      {
        name: "Navaratri",
        badge: "10/15", // Event badge (optional)
        date: "October/15/2023", // Date range
        description:
          "Navaratri is an annual Hindu festival observed in the honour of the goddess Durga. It spans over nine nights, first in the months of Chaitra, and again in the month of Sharada. It is observed for different reasons and celebrated differently in various parts of the Hindu Indain cultural sphare.",
        type: "Holiday",
        color: "#63d867", // Event custom color (optional)
      },
      {
        name: "Dussehra",
        badge: "10/24", // Event badge (optional)
        date: "October/24/2023", // Date range
        description:
          "Vijayadashami, also known as Dussehra, Dasara or Dashain, is a major Hindu festival celebrated at the end of Navaratri every year in the Indian subcontinent.",
        type: "Holiday",
        color: "#63d867", // Event custom color (optional)
      },
      {
        name: "Dhanteras",
        badge: "11/10", // Event badge (optional)
        date: "November/10/2023", // Date range
        description:
          "Dhanteras, also known as Dhanatrayodashi, is the first day that marks the festival of Diwali in India. It is celebrated on the thirteenth lunar day of Krishna Paksha in the Hindu Calender month of Ashvini.",
        type: "Holiday",
        color: "#63d867", // Event custom color (optional)
      },
      {
        name: "Diwali",
        badge: "11/12", // Event badge (optional)
        date: "November/12/2023", // Date range
        description:
          "Diwali is a festival of lights and one of the major festivals celebrated by Hindus, Jains, and Shiks. The festival usually lasts five day and is celebrating during the Hindu lunisolar month Kartika.",
        type: "Holiday",
        color: "#63d867", // Event custom color (optional)
      },
    ],
  });
});
