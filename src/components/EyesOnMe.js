// Code EyesOnMe Component Here
function EyesOnMe() {
    // دالة لمعالجة حدث التركيز
    function handleFocus() {
      console.log('Good!');
    }
  
    // دالة لمعالجة حدث فقدان التركيز
    function handleBlur() {
      console.log('Hey! Eyes on me!');
    }
  
    return (
      <div>
        {/* زر مع مستمعين لحدث التركيز وفقدان التركيز */}
        <button onFocus={handleFocus} onBlur={handleBlur}>
          Eyes on me
        </button>
      </div>
    );
  }
  
  export default EyesOnMe;
  