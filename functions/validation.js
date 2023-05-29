const validationLogin = (data) => {

    let errors = {};

    const mobileRx = /09[0-9]{2}[0-9]{3}[0-9]{4}$/;
    const codeRx = /[0-9]{4,6}/;

    if(!mobileRx.test(data.mobile)){
        errors.mobile = "شماره موبایل وارد شده صحیح نیست"
    } else {
            delete errors.mobile
        }

    if(!codeRx.test(data.code)){
        errors.code= "کد تایید را نادرست وارد کرده اید"
    } else {
        delete errors.code
    }

    return errors

    }


export {validationLogin};