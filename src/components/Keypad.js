// Code Keypad Component Here
function Keypad() {
    // دالة لمعالجة حدث التغيير
    function handleChange() {
      console.log('Entering password...');
    }
  
    return (
      <div>
        {/* حقل إدخال من نوع كلمة المرور مع مستمع لحدث التغيير */}
        <input type="password" onChange={handleChange} />
      </div>
    );
  }
  
  export default Keypad;
  