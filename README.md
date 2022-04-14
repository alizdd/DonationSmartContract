<b>Kısa Notlar</b>
<br />
-Node JS güncel versiyon indir,<br />
-Command line'dan npm install download ile npm indir<br />
-Git indir<br />
-Truffle indir<br />
-Ganache indir<br />
-VS Code içerisinde Blockchain Development Kit for Ethereum indir(zorunlu değil),<br />
-VS Code içerisinde solidity indir,<br />
-Power shell'i admin olarak aç ve sırayla yaz:<br />
Get-ExecutionPolicy -List<br />
Set-ExecutionPolicy -Scope LocalMachine Unrestricted<br />
<br />
-VS Code üzerinde yeni bir klasör aç ve terminale truffle init yazarak yeni bir proje oluştur, <br />
Ganache programını aç, quick start yaptıktan sonra  programda gözüken rpc server portunu proje içindeki truffle-config.js dosyasında development bloğunun altına yaz ve commentleri kaldır. bu şekilde ganache ile lokalde oluşturulan blockchain ağı kullanılarak smart contract test edilebilir.
Ayarlardan oluşturulan projenin truffle-config.js dosyasını seç, 
Contracts klasörünün altına yeni bir .sol dosyası oluştur ve smart contract yazmaya başla,
Yazdığın contractlar için yeni bir migration oluştur ve truffle migrate ile blockchain üzerinde tanımla
<br />
<br />
<br />
//Migration kullanarak contract'ı deploy eder
truffle migrate
//Test etmek için
truffle test test/"file".js
