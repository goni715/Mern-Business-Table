import cogoToast from "cogo-toast";


class ValidationHelper {

    ErrorToast(msg) {
        cogoToast.error(msg, { position: "top-center" });
    }
    SuccessToast(msg) {
        cogoToast.success(msg, { position: "top-center" });
    }
}



export const { ErrorToast, SuccessToast} = new ValidationHelper();