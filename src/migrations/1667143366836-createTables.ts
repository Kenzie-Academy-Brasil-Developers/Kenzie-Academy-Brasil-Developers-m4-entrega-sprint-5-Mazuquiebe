import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1667143366836 implements MigrationInterface {
    name = 'createTables1667143366836'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, "email" character varying(120) NOT NULL, "password" character varying(150) NOT NULL, "isActive" boolean NOT NULL, "isAdm" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schedule_users_properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" character varying(50) NOT NULL, "hour" character varying(50) NOT NULL, "propertyId" uuid, "userId" uuid, CONSTRAINT "PK_faa0c537e16649c3bf77873b1c5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sold" boolean NOT NULL DEFAULT false, "value" numeric(12,2) NOT NULL, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressId" uuid, "categoryId" uuid, CONSTRAINT "REL_d947b30b286a2b94fdd257d014" UNIQUE ("addressId"), CONSTRAINT "PK_0840069eb699a18f3ad6e829ae8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "district" character varying(120) NOT NULL, "zipCode" character varying(20) NOT NULL, "number" character varying(10) NOT NULL, "city" character varying(150) NOT NULL, "state" character varying(120) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" ADD CONSTRAINT "FK_d8e3114988fcedd2076b1edf0f2" FOREIGN KEY ("propertyId") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" ADD CONSTRAINT "FK_70998988b2213e2a0570b245c29" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "FK_d947b30b286a2b94fdd257d014a" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "FK_c35c840c02812719d692907c74c" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "FK_c35c840c02812719d692907c74c"`);
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "FK_d947b30b286a2b94fdd257d014a"`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" DROP CONSTRAINT "FK_70998988b2213e2a0570b245c29"`);
        await queryRunner.query(`ALTER TABLE "schedule_users_properties" DROP CONSTRAINT "FK_d8e3114988fcedd2076b1edf0f2"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "Properties"`);
        await queryRunner.query(`DROP TABLE "schedule_users_properties"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
