export class UserEntity {
    // Must be unlinked from Database objects
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public rol: string[],
        public img?: string,
    )
    {}
}
