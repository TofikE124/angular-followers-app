export class PasswordValidator {
    static oldPasswordCorrect(control) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === '1234')
                    resolve(null);
                else
                    resolve({ oldPassword: true });
            }, 1000);
        });
    }
    static passwordsMatch(control) {
        let newPassword = control?.get('newPassword')?.value;
        let oldPassword = control?.get('confirmPassword')?.value;
        return newPassword === oldPassword ? null : { passwordsMatch: true };
    }
}
//# sourceMappingURL=password.validators.js.map