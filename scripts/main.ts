import { system } from "@minecraft/server";

const mainTick = () => {
    system.run(mainTick)
}

system.run(mainTick)