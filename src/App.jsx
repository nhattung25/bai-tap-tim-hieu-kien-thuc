import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Bài tập Tìm hiểu kiến thức</h1>
        <h2>Tìm hiểu về useEffect</h2>
        <h3>1. useEffect là gì?</h3>
        <p>
          - useEffect là một React Hook cho phép bạn đồng bộ hóa một thành phần
          với một hệ thống bên ngoài. - Trước đây, nếu sử dụng class component
          trong viết code React thì giờ đây, bạn có thể sử dụng useEffect để
          quản lý vòng đời component trong functional component thay thế cho
          Life Cycle:
          <li>componentDidMount</li>
          <li>componentDidUpdate</li> <li>componentWillUnmount</li>- useEffect
          sẽ giúp bạn xử lý các logic trong vòng đời của component và được gọi
          khi component có sự thay đổi. Ngoài ra, chúng ta sẽ có useState sẽ sử
          dụng state trong functional components.
        </p>
        <h3>2.Cách sử dụng useEffect </h3>
        <p>
          - Hãy thử viết một vài đoạn code để tìm hiểu useEffect. Chẳng hạn
          chúng ta muốn khai báo thuộc tính trong state của 1 object, và 2 thuộc
          tính đó là name và familyName. Initial state sẽ là "name" và "family"
          và sau khi rendering, component sẽ thay đổi. First step: Khởi tạo
          states Hãy thử viết một vài đoạn code để tìm hiểu useEffect. Chẳng hạn
          chúng ta muốn khai báo thuộc tính trong state của 1 object, và 2 thuộc
          tính đó là name và familyName. Initial state sẽ là "name" và "family"
          và sau khi rendering, component sẽ thay đổi.
        </p>
        <li>Bước 1: Khởi tạo states</li>
        <img src="/1.PNG" alt="" />
        <li>Bước 2: khai báo useEffect()</li>
        <img src="/2.PNG" alt="" />
        <p>
          - useEffect sẽ được gọi mỗi khi components thay đổi, hiện tại
          useEffect đang là một method giống như hàm componentDidUpdate vậy. Để
          cho giống với componentDidUpdate thực sự thì chúng ta cũng có thể điều
          khiển hàm useEffect bằng câu lệnh điều kiện, nó chính là tham số thứ 2
          của hàm useEffect(). Tham số thứ 2 của useEffect là một mảng, mảng này
          cho biết rõ chỉ gọi useEffect() khi giá trị phần tử trong mảng thay
          đổi.
        </p>
        <p>Ta có thể chia useEffect làm 2 loại: </p>
        <li>
          Cần Cleanup: Hàm chưa side effect càn phải return về 1 hàm để clean
          effect
        </li>
        <li>
          Không cần Cleanup: Hàm không chứa side effect do vậy không cần dùng
          hàm để Cleanup
        </li>
        <p>
          Khi dùng useEffect cần quan tâm: có chứa side effect hay không, nó
          chạy khi nào, phụ thuộc vào giá trị nào; nó có clean up hay không.
        </p>
        <h3>3. Các lỗi thường gặp khi sử dụng useEffect</h3>
        <li>Không xác định đúng dependencies</li>
        <li>Sử dụng setStage trong useEff mà không có denpendencies</li>
        <li>Quên hàm clean up khi sủ dụng useEffect</li>
        <h2>Tìm hiểu về các hook trong react</h2>
        <h3>1. useRef</h3>
        <p>
          - useRef cho phép bạn tham chiếu một giá trị không cần thiết để hiển
          thị
        </p>
        <p>
          - Tham số initialValue: Giá trị ban đầu bạn muốn thuộc tính hiện tại
          của đối tượng ref. Nó có thể là một giá trị của bất kỳ loại. Đối số
          này bị bỏ qua sau lần kết xuất ban đầu.
        </p>
        <p>- useRef sẽ trả về một object với 1 đặc tính.</p>
        <li>
          current: giá trị ban đầu sẽ được đặt là current và có thể thay đổi.
          Nếu bạn chuyển đối tượng ref cho React dưới dạng thuộc tính ref cho
          nút JSX, React sẽ đặt thuộc tính hiện tại của nó
        </li>
        <h3>2. useReducer</h3>
        <p>
          - useReducer là một hàm có 2 tham số là state, action và trả về
          newstate sau khi thực hiện một action, hãy tưởng tượng reducer như là
          một bộ chuyển đổi, nhận input, thực hiện action tác động đến input đó,
          rồi tạo ra output. Được dùng để quản lý các stage trong React
        </p>
        <p>
          - useReducer function nhận vào reducer và initialState khởi tạo ban
          đầu, trả về state hiện tại và dispatch function dùng để trigger 1
          action
        </p>
        <h3>3. useContext</h3>
        <p>
          - useContext là một hàm cho phép bạn đọc và tạo các stage. Trong
          trường hợp props cần phải truyền qua nhiều cấp, bạn có thể dùng
          useContext để rút ngắn bước này. Bạn có thể tạo ra một context và thêm
          vào các stage, khi cần dùng stage trong component bạn chỉ cần gọi
          context.
        </p>
        <h3>4. useMemo</h3>
        <p>
          - useMemo giúp ta kiểm soát việc được render dư thừa của các component
          con, nó khá giống với hàm shouldComponentUpdate trong LifeCycle. Bằng
          cách truyền vào 1 tham số thứ 2 thì chỉ khi tham số này thay đổi thì
          thằng useMemo mới được thực thi. Ví dụ:
        </p>
        <li>Có sử dụng useMemo</li>
        <img src="/3.PNG" alt="" />
        <li>Không sử dụng useMemo</li>
        <img src="/4.PNG" alt="" />
        <h4>5. useCallback</h4>
        <p>
          - useCallback có nhiệm vụ tương tự như useMemo nhưng khác ở chỗ
          function truyền vào useMemo bắt buộc phải ở trong quá trình render
          trong khi đối với useCallback đó lại là function callback của 1 event
          nào đó như là onClick chẳng hạn.
        </p>
      </div>
    </>
  );
}

export default App;
