import { execute as exec } from '../utils/exec';
import { IPackageManagerAdapter } from './IPackageManagerAdapter';
import { IDependency } from './IDependency';

export class NpmAdapter implements IPackageManagerAdapter {
  async listDependencies(packageName: string): Promise<IDependency> {
    const command = `npm ls ${packageName} --json`;
    return JSON.parse(await exec(command));
  }
}