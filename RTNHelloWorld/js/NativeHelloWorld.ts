import type {TurboModule} from "react-native/Libraries/TurboModule/RCTExport";
import {TurboModuleRegistry} from "react-native";

export interface Spec extends TurboModule {
    print(a: string): string;
}

export default TurboModuleRegistry.get<Spec>("RTNHelloWorld") as Spec | null;
