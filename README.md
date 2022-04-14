-Node JS güncel versiyon indir,
-Command line'dan npm install download ile npm indir
-Git indir
-Truffle indir
-Ganache indir
-VS Code içerisinde Blockchain Development Kit for Ethereum indir(zorunlu değil),
-VS Code içerisinde solidity indir,
-Power shell'i admin olarak aç ve sırayla yaz:
Get-ExecutionPolicy -List
Set-ExecutionPolicy -Scope LocalMachine Unrestricted

-VS Code üzerinde yeni bir klasör aç ve terminale truffle init yazarak yeni bir proje oluştur, 
Ganache programını aç, quick start yaptıktan sonra  programda gözüken rpc server portunu proje içindeki truffle-config.js dosyasında development bloğunun altına yaz ve commentleri kaldır. bu şekilde ganache ile lokalde oluşturulan blockchain ağı kullanılarak smart contract test edilebilir.
Ayarlardan oluşturulan projenin truffle-config.js dosyasını seç, 
Contracts klasörünün altına yeni bir .sol dosyası oluştur ve smart contract yazmaya başla,
Yazdığın contractlar için yeni bir migration oluştur ve truffle migrate ile blockchain üzerinde tanımla



//Migration kullanarak contract'ı deploy eder
truffle migrate
//Test etmek için
truffle test test/"file".js
