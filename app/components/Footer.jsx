import React from 'react'

const Footer = () => {
  return (
    <footer className="font-bold text-lg font-ebGaramond bg-Jungle text-Beige">
      <div className="grid grid-cols-2 lg:grid-cols-4 text-center items-center justify-between p-10 col-span-2">
        <div className="mt-20">
          <h3 className="border-b-4 border-Terracotta inline-block">Books</h3>
          <ul className="my-8">
            <a
              href="https://www.amazon.com/Popol-Vuh-Definitive-Mayan-Glories/dp/0684818450/ref=sr_1_1?crid=1OL9UKQIBTYC7&dib=eyJ2IjoiMSJ9.mVupScNg5cKTBsnvzdKnAcgWcgeBfusf8K8ZbwNb17iADvmhIQ_Oo-Zc3jSg1ycHCHyooN2TuoEI1oZBLi26PuaF0VlT0d2NyqGIHD2W5lIa3yzOZpid3OozYytrEhzlrVnoHF1mrwm0hiQRiDv_Zf5jqtVvPqL7A4cyArCEitVJhV075wysrxgzU3ziSokj3Tqs4cL8e46w3frsSY3Er1KR9rviuaKlBY1Tu3UP0fM.aYofvMS9G7Pft7ydj5PfqoFGHIfjBgueWqImGhDe1r8&dib_tag=se&keywords=mayan&qid=1731408979&sprefix=maya%2Caps%2C161&sr=8-1"
              target="_blank"
            >
              <li className="my-4">Popol Vuh</li>
            </a>
            <a
              href="https://www.amazon.com/Maya-Ninth-Ancient-Peoples-Places/dp/0500291888/ref=sr_1_2?crid=1OL9UKQIBTYC7&dib=eyJ2IjoiMSJ9.mVupScNg5cKTBsnvzdKnAcoFzIDRbJwS7fXJZWyasHdNQf_VcNDUOKp6pJV2IpJ9F-LOqa7eTp3QYZNS9e4VVuYs-8UzzP_UB-J8NwyHJgxgDB5JN7IjkEGrg2RHgAwelqJIejjuwnGWxmQ58A5dkZj1dxiNnoQxDT0ifL579IsTmBRF7FyqhZeWA8KZ2De4hZ8uQyZ1Qn3sdM0QpNQlZ3TVCxq8vYYTx3LPaNGpCug.t_DNlpLKbugacNdDm4Lszfgf_Hon2R048lXgEm78KCM&dib_tag=se&keywords=mayan&qid=1731409160&rnid=2941120011&s=books&sprefix=maya%2Caps%2C161&sr=1-2"
              target="_blank"
            >
              <li className="my-4">Ancient Peoples and Places</li>
            </a>
            <a
              href="https://www.amazon.com/Maya-Civilization-History-Beginning-Mesoamerican-ebook/dp/B083JGRFH5/ref=sr_1_3?crid=1OL9UKQIBTYC7&dib=eyJ2IjoiMSJ9.mVupScNg5cKTBsnvzdKnAcoFzIDRbJwS7fXJZWyasHdNQf_VcNDUOKp6pJV2IpJ9F-LOqa7eTp3QYZNS9e4VVuYs-8UzzP_UB-J8NwyHJgxgDB5JN7IjkEGrg2RHgAwelqJIejjuwnGWxmQ58A5dkZj1dxiNnoQxDT0ifL579IsTmBRF7FyqhZeWA8KZ2De4hZ8uQyZ1Qn3sdM0QpNQlZ3TVCxq8vYYTx3LPaNGpCug.t_DNlpLKbugacNdDm4Lszfgf_Hon2R048lXgEm78KCM&dib_tag=se&keywords=mayan&qid=1731409160&rnid=2941120011&s=books&sprefix=maya%2Caps%2C161&sr=1-3"
              target="_blank"
            >
              <li className="my-4">A History from Beginning to End</li>
            </a>
            <a
              href="https://www.amazon.com/Forest-Kings-Untold-Story-Ancient/dp/0688112048/ref=sr_1_4?crid=1OL9UKQIBTYC7&dib=eyJ2IjoiMSJ9.mVupScNg5cKTBsnvzdKnAcoFzIDRbJwS7fXJZWyasHdNQf_VcNDUOKp6pJV2IpJ9F-LOqa7eTp3QYZNS9e4VVuYs-8UzzP_UB-J8NwyHJgxgDB5JN7IjkEGrg2RHgAwelqJIejjuwnGWxmQ58A5dkZj1dxiNnoQxDT0ifL579IsTmBRF7FyqhZeWA8KZ2De4hZ8uQyZ1Qn3sdM0QpNQlZ3TVCxq8vYYTx3LPaNGpCug.t_DNlpLKbugacNdDm4Lszfgf_Hon2R048lXgEm78KCM&dib_tag=se&keywords=mayan&qid=1731409160&rnid=2941120011&s=books&sprefix=maya%2Caps%2C161&sr=1-4"
              target="_blank"
            >
              <li className="my-4">A Forest of Kings</li>
            </a>
          </ul>
        </div>
        <div className="mt-20">
          <h3 className="border-b-4 border-Terracotta inline-block">Puzzles</h3>
          <ul className="my-8">
            <a
              href="https://www.amazon.com/Little-Learning-Hands-Architecture-Birthday/dp/B08KXSFTHT/ref=sr_1_2?crid=3QG18RQ1OYRS7&dib=eyJ2IjoiMSJ9.M3DhpzgH6YqfpuvqrMW2HzvlH3g1NcH1r3pYLV_GcCnkfYnabekDrnK9QgXSQiSt1FT2Xw4Q7YB1DnquINrhkOSz-httT8wawO2NoLyMu24SKnkzQ0iAtYTsjZutJltks_JzFvQJqtC1JyR3vsAkG12uJvjkOiU7ArjgpY675tQmseVhfBVFFYKH7Qom9cd_UGIvG_7VX0hbQK3RWbPY8L_gAflCNZZffC5X7dvNQq_o-Bkh6ta0IPqTOf0jAMnxXeYG8zWb9VVih3LsBrXzoQq3ufDR4MQHQI5gE54xMUQ.U7_K7xyvKiwTSWOL0uuCMHrOHdEGBWChLgXib9fOOEY&dib_tag=se&keywords=mayan+puzzle&qid=1731409945&sprefix=mayan+puz%2Caps%2C144&sr=8-2"
              target="_blank"
            >
              <li className="my-4">Mayan Pyramid 3D</li>
            </a>
            <a
              href="https://www.amazon.com/CHICHENITZA-Pyramid-Mexico-Jigsaw-Puzzle/dp/B08BKBCSQJ/ref=sr_1_3?crid=3QG18RQ1OYRS7&dib=eyJ2IjoiMSJ9.M3DhpzgH6YqfpuvqrMW2HzvlH3g1NcH1r3pYLV_GcCnkfYnabekDrnK9QgXSQiSt1FT2Xw4Q7YB1DnquINrhkOSz-httT8wawO2NoLyMu24SKnkzQ0iAtYTsjZutJltks_JzFvQJqtC1JyR3vsAkG12uJvjkOiU7ArjgpY675tQmseVhfBVFFYKH7Qom9cd_UGIvG_7VX0hbQK3RWbPY8L_gAflCNZZffC5X7dvNQq_o-Bkh6ta0IPqTOf0jAMnxXeYG8zWb9VVih3LsBrXzoQq3ufDR4MQHQI5gE54xMUQ.U7_K7xyvKiwTSWOL0uuCMHrOHdEGBWChLgXib9fOOEY&dib_tag=se&keywords=mayan+puzzle&qid=1731409945&sprefix=mayan+puz%2Caps%2C144&sr=8-3"
              target="_blank"
            >
              <li className="my-4">Chichen Itza</li>
            </a>
            <a
              href="https://www.amazon.com/Mexico-Vintage-Poster-Premium-Jigsaw/dp/B0CD4PS14R/ref=sr_1_7?crid=3QG18RQ1OYRS7&dib=eyJ2IjoiMSJ9.M3DhpzgH6YqfpuvqrMW2HzvlH3g1NcH1r3pYLV_GcCnkfYnabekDrnK9QgXSQiSt1FT2Xw4Q7YB1DnquINrhkOSz-httT8wawO2NoLyMu24SKnkzQ0iAtYTsjZutJltks_JzFvQJqtC1JyR3vsAkG12uJvjkOiU7ArjgpY675tQmseVhfBVFFYKH7Qom9cd_UGIvG_7VX0hbQK3RWbPY8L_gAflCNZZffC5X7dvNQq_o-Bkh6ta0IPqTOf0jAMnxXeYG8zWb9VVih3LsBrXzoQq3ufDR4MQHQI5gE54xMUQ.U7_K7xyvKiwTSWOL0uuCMHrOHdEGBWChLgXib9fOOEY&dib_tag=se&keywords=mayan%2Bpuzzle&qid=1731409945&sprefix=mayan%2Bpuz%2Caps%2C144&sr=8-7&th=1"
              target="_blank"
            >
              <li className="my-4">Tulum</li>
            </a>
            <a
              href="https://www.amazon.com/Educa-Montage-Included-Completed-Measures/dp/B0BSG15NWD/ref=sr_1_1?crid=3QG18RQ1OYRS7&dib=eyJ2IjoiMSJ9.M3DhpzgH6YqfpuvqrMW2HzvlH3g1NcH1r3pYLV_GcCnkfYnabekDrnK9QgXSQiSt1FT2Xw4Q7YB1DnquINrhkOSz-httT8wawO2NoLyMu24SKnkzQ0iAtYTsjZutJltks_JzFvQJqtC1JyR3vsAkG12uJvjkOiU7ArjgpY675tQmseVhfBVFFYKH7Qom9cd_UGIvG_7VX0hbQK3RWbPY8L_gAflCNZZffC5X7dvNQq_o-Bkh6ta0IPqTOf0jAMnxXeYG8zWb9VVih3LsBrXzoQq3ufDR4MQHQI5gE54xMUQ.U7_K7xyvKiwTSWOL0uuCMHrOHdEGBWChLgXib9fOOEY&dib_tag=se&keywords=mayan+puzzle&qid=1731409945&sprefix=mayan+puz%2Caps%2C144&sr=8-1"
              target="_blank"
            >
              <li className="my-4">Montage</li>
            </a>
          </ul>
        </div>
        <div className="mt-20">
          <h3 className="border-b-4 border-Terracotta inline-block">Toys</h3>
          <ul className="my-8">
            <a
              href="https://www.amazon.com/Transformers-Studios-Panther-Wakanda-Forever/dp/B09QXR9891/ref=sr_1_13?dib=eyJ2IjoiMSJ9.gIvYz-52JEAJ6gd0968PZNsSRsf9vx3aGjHWjB-dmFzgyJpx-yOPng_spC1ntNJXeVkesu8PkYWtrC72p28Z7ZOZiNIAgUWAz3owGw3OvGX4YRGkeINODMMvTdJntCmQqMy2DNKrG-YUtDZeO8sJ_WpthTRJSuvi7VjOEK7-0GLim7VYOK2OVBi5z4BgOUSsVhPsdbzNqO7LR4SwYwzwESTs5FhIK9SLQEWgJfE_X3OPTrtap1bz94uAioUb-j5_BS9eNXD4H4kyLe7-nFfhOenUXuMIUn34sOh-x1o7v-E.pUpIq9AuO34Si-ORLkCP6S8MItgG2_YixjeDUITdkic&dib_tag=se&keywords=mayan%2Btoy&qid=1731411200&sr=8-13&th=1"
              target="_blank"
            >
              <li className="my-4">Marvel</li>
            </a>
            <a
              href="https://www.amazon.com/5%C3%B42-Worry-Dolls-Free-Guatemala-Fabric/dp/B0BW9V5KYR/ref=sr_1_6?dib=eyJ2IjoiMSJ9.gIvYz-52JEAJ6gd0968PZNsSRsf9vx3aGjHWjB-dmFzgyJpx-yOPng_spC1ntNJXeVkesu8PkYWtrC72p28Z7ZOZiNIAgUWAz3owGw3OvGX4YRGkeINODMMvTdJntCmQqMy2DNKrG-YUtDZeO8sJ_WpthTRJSuvi7VjOEK7-0GLim7VYOK2OVBi5z4BgOUSsVhPsdbzNqO7LR4SwYwzwESTs5FhIK9SLQEWgJfE_X3OPTrtap1bz94uAioUb-j5_BS9eNXD4H4kyLe7-nFfhOenUXuMIUn34sOh-x1o7v-E.pUpIq9AuO34Si-ORLkCP6S8MItgG2_YixjeDUITdkic&dib_tag=se&keywords=mayan+toy&qid=1731411200&sr=8-6"
              target="_blank"
            >
              <li className="my-4">Worry Dolls</li>
            </a>
            <a
              href="https://www.amazon.com/Gen%C3%A9rico-Malachite-Handmade-Quetzalcoaltl-Teotihuacan/dp/B09F6XBCP8/ref=sr_1_7?dib=eyJ2IjoiMSJ9.gIvYz-52JEAJ6gd0968PZNsSRsf9vx3aGjHWjB-dmFzgyJpx-yOPng_spC1ntNJXeVkesu8PkYWtrC72p28Z7ZOZiNIAgUWAz3owGw3OvGX4YRGkeINODMMvTdJntCmQqMy2DNKrG-YUtDZeO8sJ_WpthTRJSuvi7VjOEK7-0GLim7VYOK2OVBi5z4BgOUSsVhPsdbzNqO7LR4SwYwzwESTs5FhIK9SLQEWgJfE_X3OPTrtap1bz94uAioUb-j5_BS9eNXD4H4kyLe7-nFfhOenUXuMIUn34sOh-x1o7v-E.pUpIq9AuO34Si-ORLkCP6S8MItgG2_YixjeDUITdkic&dib_tag=se&keywords=mayan+toy&qid=1731411200&sr=8-7"
              target="_blank"
            >
              <li className="my-4">Ground Stone</li>
            </a>
            <a
              href="https://www.amazon.com/Rubies-Costume-Childs-Warrior-Chinless/dp/B003EW1VVI/ref=sr_1_9?dib=eyJ2IjoiMSJ9.gIvYz-52JEAJ6gd0968PZNsSRsf9vx3aGjHWjB-dmFzgyJpx-yOPng_spC1ntNJXeVkesu8PkYWtrC72p28Z7ZOZiNIAgUWAz3owGw3OvGX4YRGkeINODMMvTdJntCmQqMy2DNKrG-YUtDZeO8sJ_WpthTRJSuvi7VjOEK7-0GLim7VYOK2OVBi5z4BgOUSsVhPsdbzNqO7LR4SwYwzwESTs5FhIK9SLQEWgJfE_X3OPTrtap1bz94uAioUb-j5_BS9eNXD4H4kyLe7-nFfhOenUXuMIUn34sOh-x1o7v-E.pUpIq9AuO34Si-ORLkCP6S8MItgG2_YixjeDUITdkic&dib_tag=se&keywords=mayan+toy&qid=1731411200&sr=8-9"
              target="_blank"
            >
              <li className="my-4">Mask</li>
            </a>
          </ul>
        </div>
        <div className="mt-20">
          <h3 className="border-b-4 border-Terracotta inline-block">Shirts</h3>
          <ul className="my-8">
            <a
              href="https://www.amazon.com/Mayan-Calendar-Sun-Archeological-Art/dp/B0B2M3KQBG/ref=sr_1_14?dib=eyJ2IjoiMSJ9.7sPk6nb1FTQ3Zj_GlLI3gTrudUORjlbrKOPGgs64flQug217mbxIF6NgYBjRgTpBlpnFjPysMVjazuDrTq6VQLhApNNOruAgU3KKpJ6_nrMTUjmp-GS9Dk64LwWFkXJhKNX2ebrN5aAaj7ONFeZm1Mbn6CeW_rniibT5Y12YzxlX2kGxNC6HO29ZEs5kxB6L34IOJxiUs51tDQARqmDViTCeBuj15C7VQvyzjrIymnFDnRlkaRWBCpecPxT-B3BeXM8PsSJ4cYTG1rnK60ccfokW_U_QR6maopA5eh0o4vg.VUohY9hkqszTzzJrDg2gyyahc_L-VHNe9NnLQ5P5EKA&dib_tag=se&keywords=mayan+shirt&qid=1731411666&sr=8-14"
              target="_blank"
            >
              <li className="my-4">Archeological Art</li>
            </a>
            <a
              href="https://www.amazon.com/Chichen-Itza-Maya-Civilization-Pyramid/dp/B0DBG8TD97/ref=sr_1_12_sspa?crid=2E1VY2E8P1H34&dib=eyJ2IjoiMSJ9.mVupScNg5cKTBsnvzdKnAcgWcgeBfusf8K8ZbwNb17jq0wH034uaOkzGWEFMqH3JFAsMqjpze9sGpFyjOx2VDkA0VGe1Eg3f-zgNTsgftusa3yzOZpid3OozYytrEhzlrVnoHF1mrwm0hiQRiDv_Zf5jqtVvPqL7A4cyArCEitVJhV075wysrxgzU3ziSokj3Tqs4cL8e46w3frsSY3Er1KR9rviuaKlBY1Tu3UP0fM.2LFVDCumDCvlUVqiNIMZ1UwhPdy4-_ITlfJkoLwTFiw&dib_tag=se&keywords=mayan&qid=1731411844&sprefix=mayan+%2Caps%2C140&sr=8-12-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1"
              target="_blank"
            >
              <li className="my-4">Chichen Itza</li>
            </a>
            <a
              href="https://www.amazon.com/Ancient-Gods-Civilization-Mythology-Deities/dp/B0CJR494SW/ref=sr_1_15?dib=eyJ2IjoiMSJ9.7sPk6nb1FTQ3Zj_GlLI3gTrudUORjlbrKOPGgs64flQug217mbxIF6NgYBjRgTpBlpnFjPysMVjazuDrTq6VQLhApNNOruAgU3KKpJ6_nrMTUjmp-GS9Dk64LwWFkXJhKNX2ebrN5aAaj7ONFeZm1Mbn6CeW_rniibT5Y12YzxlX2kGxNC6HO29ZEs5kxB6L34IOJxiUs51tDQARqmDViTCeBuj15C7VQvyzjrIymnFDnRlkaRWBCpecPxT-B3BeXM8PsSJ4cYTG1rnK60ccfokW_U_QR6maopA5eh0o4vg.VUohY9hkqszTzzJrDg2gyyahc_L-VHNe9NnLQ5P5EKA&dib_tag=se&keywords=mayan+shirt&qid=1731411666&sr=8-15"
              target="_blank"
            >
              <li className="my-4">Gods</li>
            </a>
            <a
              href="https://www.amazon.com/Numerals-Hieroglyphics-Symbol-Infinite-T-Shirt/dp/B07RYHHFLN/ref=sr_1_21?dib=eyJ2IjoiMSJ9.7sPk6nb1FTQ3Zj_GlLI3gTrudUORjlbrKOPGgs64flQug217mbxIF6NgYBjRgTpBlpnFjPysMVjazuDrTq6VQLhApNNOruAgU3KKpJ6_nrMTUjmp-GS9Dk64LwWFkXJhKNX2ebrN5aAaj7ONFeZm1Mbn6CeW_rniibT5Y12YzxlX2kGxNC6HO29ZEs5kxB6L34IOJxiUs51tDQARqmDViTCeBuj15C7VQvyzjrIymnFDnRlkaRWBCpecPxT-B3BeXM8PsSJ4cYTG1rnK60ccfokW_U_QR6maopA5eh0o4vg.VUohY9hkqszTzzJrDg2gyyahc_L-VHNe9NnLQ5P5EKA&dib_tag=se&keywords=mayan+shirt&qid=1731411666&sr=8-21"
              target="_blank"
            >
              <li className="my-4">Numeral</li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
