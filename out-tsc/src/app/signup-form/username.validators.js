export class UsernameValidators {
    static cannotContainSpace(c) {
        if (c.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    }
    static shouldBeUnique(c) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (c.value === 'tofik')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 1000);
        });
    }
}
//# sourceMappingURL=username.validators.js.map