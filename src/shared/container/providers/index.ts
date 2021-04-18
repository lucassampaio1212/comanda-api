import { container } from "tsyringe";
import IDateProvider from "./DateProvider/IDateProvider";
import DayjsDateProvider from "./DateProvider/implementations/DayJsProvider";
import IMailProvider from "./MailProvider/IMailProvider";
import { EtherealMailProvider } from "./MailProvider/implementations/EtherealMailProvider";



container.registerSingleton<IDateProvider>("DateProvider", DayjsDateProvider);
container.registerInstance<IMailProvider>(
    "EtherealMailProvider",
    new EtherealMailProvider()
);