export const DB_INIT = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
export const DB_TRANSACTION  = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
export const REQUEST = indexedDB.open("MyAwesomeDateBase", 1);
var db;
REQUEST.onerror = function(event) {
	console.log(event);
};
REQUEST.onsuccess = function(event) {
	db = event.target.result;
	console.log(event, db);
};

REQUEST.onupgradeneeded = function(event) {
	var db = event.target.result;

	// Создаем хранилище объектов для этой базы данных
	var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};