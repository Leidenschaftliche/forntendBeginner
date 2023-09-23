function calcTheResult() {
    const text_n1 = document.getElementById("num1").value;
    const text_n2 = document.getElementById("num2").value;
    const text_sel = document.getElementById("operations").value[0];
    const el_result = document.getElementById("result")
    //console.log(text_sel)
    ///el_result.textContent = text_n1;
    
    const num_1= parseFloat(text_n1);
    const num_2= parseFloat(text_n2);

    switch (text_sel) {
        case 'A':
            el_result.textContent=num_1+num_2;
            break;
        case 'S':
            el_result.textContent=num_1-num_2;
            break;
        case 'M':
            el_result.textContent=num_1*num_2;
            break;
        case 'D':
            el_result.textContent=num_1/num_2;
            break;
    }
}


