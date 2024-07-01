console.log("Hello, World!");
import si from "systeminformation";
// si.cpu().then((data) => console.log(data));
// si.getAllData().then((data) => console.log(data));
si.processes().then((data) => console.log(data));
