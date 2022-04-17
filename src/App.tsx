import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Library from './components/Library';
import Tours from './components/Tours';
import img1 from './images/icon-1.png';
import img2 from './images/icon-2.png';
import img3 from './images/icon-3.png';
import img4 from './images/icon-4.png';
import img20 from './images/img-20.jpg';
import img6 from './images/img-6.png';

const LIST_ICON = [
   {
      icon: img1,
      name: 'Lưu trú',
   },
   {
      icon: img2,
      name: 'Ăn uống',
   },
   {
      icon: img3,
      name: 'Các tuyến điểm',
   },
   {
      icon: img4,
      name: 'Các lưu ý',
   },
];

const RULES = [
   ' Tuân theo sự hướng dẫn của Ban quản lý và hướng dẫn viên',
   'Vui lòng không mang đồ ăn, thức uống vào khu vực tham quan',
   'Vui lòng không mang các sinh vật ngoại lai vào khu vực rừng U Minh Thượng',
   'Đừng lấy đi gì ngoài những bức ảnh, đừng để lại gì ngoài những dấu chân',
   'Vui lòng không vứt rác, bẻ, phá hoại cây rừng.',
   'Đừng khắc, vẽ lên cây hãy viết vào trang lưu bút mà chúng tôi đính kèm',
   'Để bảo vệ sự sống tự nhiên của các loài động vật ở đây vui lòng đi nhẹ nói khẽ',
   'Tuyệt đối cấm mang các vật dụng dễ gây cháy nổ vào rừng',
   'Hotline: (077) 3883037 Gọi ngay cho chúng tôi khi cần hỗ trợ',
   'Vui lòng không săn bắt tại rừng Chúng tôi nói không với thịt thú rừng',
   'Không được tự ý đi vào vùng lõi rừng, nơi không phục vụ khai thác du lịch.',
];

function App() {
   return (
      <div className="App">
         <Header />
         <Hero />
         <div className="flex flex-col  mb-[60px]">
            <div
               className="py-5"
               style={{
                  backgroundImage: `url('${img6}')`,
               }}
            >
               <ul className="grid md:grid-cols-4 grid-cols-2 gap-4 ">
                  {LIST_ICON.map((icon) => (
                     <li
                        key={icon.name}
                        className="flex items-center justify-center text-center"
                     >
                        <button className="flex items-center flex-col">
                           <img
                              src={icon.icon}
                              alt=""
                              className="w-14 h-14 mb-2"
                           />
                           <span className="font-semibold text-base text-white">
                              {icon.name}
                           </span>
                        </button>
                     </li>
                  ))}
               </ul>
            </div>
            <div
               style={{ backgroundImage: `url("${img20}")` }}
               className="bg-cover bg-center py-[30px] text-white relative flex flex-col gap-y-[60px]"
            >
               <div className="absolute inset-0 bg-black/80"></div>

               <div className="relative">
                  <h3 className="text-center lg:text-4xl text-3xl  font-extrabold text-white mb-8">
                     Giới thiệu
                  </h3>
                  <div className="max-w-3xl mx-auto text-justify px-4">
                     <p>
                        Vào năm 2006, vườn Quốc gia U Minh Thượng được UNESCO
                        công nhận là Khu dự trữ sinh quyển thế giới. Năm 2013,
                        toàn bộ diện tích khu rừng đã được nhận danh hiệu Vườn
                        di sản ASEAN. Đến năm 2015, U Minh Thượng còn được công
                        nhận là khu Ramsar thứ 2228 của thế giới và đã đạt 5
                        trong tổng số 9 tiêu chí của Công ước Ramsar - một cam
                        kết quốc tế được thực hiện để bảo tồn, sử dụng rừng ngập
                        mặn một cách hiệu quả nhất. Hệ sinh thái ở đây có thể
                        được sử dụng để tổ chức DLST vì đây là vùng có hệ sinh
                        thái rừng tràm đặc thù của miền Nam, tập trung nhiều
                        loại tràm khác nhau. Ngoài ra ở U Minh Thượng cũng có sự
                        đa dạng loài cao, đặc biệt có 17 loài động vật nguy cấp,
                        quý, hiếm được ghi vào sách đỏ của Việt Nam và sách đỏ
                        Thế giới như rái cá lông mũi, rái cá vuốt bé, vượn má
                        vàng, mèo Bengan, dơi ngựa lớn, cò lạo Ấn Độ, già đẫy
                        Java, kỳ đà vân, cầy hương…Rừng tràm úng phèn trên đất
                        than bùn tại đây là hệ sinh thái có một không hai ở Việt
                        Nam. Mọi người giờ đây đang chuyển sang những yếu tố
                        sống xanh, yêu thiên nhiên nên sự hứng thú với du lịch
                        sinh thái cũng tăng lên, đặc biệt là với một hệ sinh
                        thái đặc thù như U Minh Thượng sẽ càng thu hút những
                        người yêu thích tìm về. Khi du lịch sinh thái ở đây phát
                        triển sẽ giúp cho nhiều người có cơ hội tiếp cận với hệ
                        sinh thái ở đây, nguồn thu từ du lịch sẽ giúp cho U Minh
                        Thượng có điều kiện để bảo vệ sự đa dạng sinh học cũng
                        như sự quý hiếm của hệ sinh thái mà nơi đây may mắn có
                        được.
                     </p>
                  </div>
               </div>
               <div className="flex flex-col items-center relative">
                  <h3 className="text-center lg:text-4xl text-3xl  font-extrabold text-white mb-8">
                     Nguyên tắc du lịch sinh thái
                  </h3>
                  <div className="px-4 pl-8">
                     <ol className="list-decimal">
                        {RULES.map((rule) => (
                           <li>{rule}</li>
                        ))}
                     </ol>
                  </div>
               </div>
            </div>
            <div className="flex flex-col gap-y-[60px] mt-[60px]">
               <div>
                  <Tours />
               </div>
               <div>
                  <Library />
               </div>
            </div>
         </div>

         <Footer />
      </div>
   );
}

export default App;
