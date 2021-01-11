import "reflect-metadata";
import { FixtureFactory } from "class-fixtures-factory";
import { validate } from "class-validator";
import { Image } from "../validators";

test("Validate Creator Entity", async () => {
  const factory = new FixtureFactory();
  factory.register([Image]);
  let creator = factory.make(Image).many(10);
  console.log(creator);
  return validate(creator)
    .then((errs) => {
      expect(errs).toBeFalsy();
    });
});
