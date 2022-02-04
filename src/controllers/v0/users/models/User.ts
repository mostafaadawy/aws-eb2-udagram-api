import {Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt, AutoIncrement} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column
  public email!: string;

  @Column
  public passwordHash!: string;
 
  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;

  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();

  short() {
    return {
      email: this.email,
    };
  }
}
