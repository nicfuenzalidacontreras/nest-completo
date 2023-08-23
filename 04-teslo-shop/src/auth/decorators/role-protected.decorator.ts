import { SetMetadata } from '@nestjs/common';
import { validRoles } from '../interfaces/valid-role.interface';

export const META_ROLES = 'roles';

export const RoleProtected = (...args: validRoles[]) => {

    return SetMetadata(META_ROLES, args)
};
