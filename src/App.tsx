import Messages from "./components/pages/messages";
import Users from "./components/pages/users";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// const MESSAGES=[
//   {
//     index: "698c74f4dcbc00c7f9765945",
//     about: "Eiusmod ad elit consequat ut reprehenderit velit in. Duis aute mollit aute sit consequat. Tempor adipisicing consequat anim nisi sunt occaecat non commodo. Culpa ea quis proident dolor non ullamco. Elit sint deserunt laboris officia officia anim quis tempor incididunt et ullamco voluptate excepteur culpa.\r\n"
//   },
//   {
//     index: "698c74f44d0b2db2b4c741ed",
//     about: "Mollit Lorem labore fugiat deserunt ut amet aute excepteur excepteur est do aliquip consequat. Aute id reprehenderit deserunt deserunt non. Consequat ipsum amet consectetur exercitation ex non quis anim sunt irure velit esse. In sunt dolore incididunt aute dolore. Deserunt adipisicing velit quis excepteur esse est. Do enim laborum esse cupidatat ea sint laborum pariatur magna veniam in esse incididunt. Qui reprehenderit esse dolore voluptate id mollit veniam sint dolor cupidatat sunt.\r\n"
//   },
//   {
//     index: "698c74f442456a2e25d053c8",
//     about: "Anim tempor velit ipsum occaecat Lorem. Ipsum esse commodo commodo ex anim in ut. Ad culpa in esse cupidatat consequat. Nostrud laborum enim consequat laboris.\r\n"
//   },
//   {
//     index: "698c74f42f46fc863ae0ec38",
//     about: "Deserunt ad magna cillum et. Occaecat cupidatat pariatur dolor reprehenderit anim adipisicing quis laboris laboris do et mollit labore. Dolore occaecat cillum eiusmod nulla commodo dolor ad aliqua laboris adipisicing velit aliquip culpa. Sint sit cupidatat pariatur ut dolore laboris est ipsum minim aute exercitation culpa.\r\n"
//   },
//   {
//     index: "698c74f4c6e1a231884bcda5",
//     about: "Officia ex nulla aliqua est ex. Ex tempor mollit et duis duis consectetur. Irure ea cillum reprehenderit irure amet tempor sunt. Officia non nisi cillum culpa Lorem incididunt sit. Magna anim occaecat deserunt amet veniam ea dolor. Duis ullamco nisi deserunt consequat ad dolore ad consectetur adipisicing.\r\n"
//   },
//   {
//     index: "698c74f4cd3fa74e65e53465",
//     about: "Laboris reprehenderit dolor eu ipsum ad Lorem dolore occaecat sunt eiusmod esse ad ea. Esse elit eiusmod aliqua excepteur in sit labore dolor esse minim. Laborum laborum labore veniam consectetur occaecat nulla elit aliqua officia ea. Consequat velit officia proident est reprehenderit nulla laboris incididunt ut exercitation. Enim consequat ullamco reprehenderit fugiat elit minim aliquip et.\r\n"
//   },
// ];

const USERS=[
  {
    "identifiant": "698d9d7926350ba8e864a9b8",
    "name": "Ellis Mayer",
    "gender": "male",
    "photo_profil": "http://placehold.it/32x32",
    "birthDate": "2014-01-04T02:06:15 -00:00",
    "phone": "+1 (883) 499-2132",
    "address": "481 Knapp Street, Williamson, Connecticut, 8193"
  },
  {
    "identifiant": "698d9d79f48ec5fa984d7812",
    "name": "Gale Sweeney",
    "gender": "female",
    "photo_profil": "http://placehold.it/32x32",
    "birthDate": "2022-02-16T03:32:51 -00:00",
    "email": "galesweeney@manglo.com",
    "phone": "+1 (916) 557-3811",
    "address": "125 Stewart Street, Cazadero, Alabama, 9921"
  },
  {
    "identifiant": "698d9d798bca97cea1e01869",
    "name": "Marcella Key",
    "gender": "female",
    "photo_profil": "http://placehold.it/32x32",
    "birthDate": "2021-09-11T03:22:53 -00:00",
    "email": "marcellakey@manglo.com",
    "phone": "+1 (850) 462-2413",
    "address": "844 Langham Street, Glenbrook, Federated States Of Micronesia, 4713"
  },
  {
    "identifiant": "698d9d79a71b8b8040aaffcf",
    "name": "Valencia Gillespie",
    "gender": "male",
    "photo_profil": "http://placehold.it/32x32",
    "birthDate": "2019-06-17T09:17:17 -00:00",
    "email": "valenciagillespie@manglo.com",
    "phone": "+1 (881) 402-3184",
    "address": "548 Rochester Avenue, Waverly, Utah, 4442"
  },
  {
    "identifiant": "698d9d7964e9d1270e7e07a7",
    "name": "Barry Burgess",
    "gender": "male",
    "photo_profil": "http://placehold.it/32x32",
    "birthDate": "2023-01-15T11:00:00 -00:00",
    "email": "barryburgess@manglo.com",
    "phone": "+1 (841) 547-2586",
    "address": "820 Whitney Avenue, Shelby, New York, 7319"
  },
  {
    "identifiant": "698d9d791efdcbeb3d327d46",
    "name": "Jewell Anderson",
    "gender": "female",
    "photo_profil": "http://placehold.it/32x32",
    "birthDate": "2015-12-11T05:35:55 -00:00",
    "email": "jewellanderson@manglo.com",
    "phone": "+1 (951) 466-2404",
    "address": "524 Union Avenue, Graball, Texas, 9037"
  },
  {
    "identifiant": "698d9d79debb11be485c3451",
    "name": "Lenore Ryan",
    "gender": "female",
    "photo_profil": "http://placehold.it/32x32",
    "birthDate": "2017-05-09T02:55:00 -00:00",
    "phone": "+1 (818) 480-3581",
    "address": "723 Bay Street, Bethpage, South Carolina, 5782"
  }
]
function App() {
  return(

<Users users={USERS}/>
  )

}

export default App
