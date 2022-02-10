class HashTable {
    constructor() {
        this.buckets = new Array(127);
        this.size = 0;   
    }

    _hash(key) {
        let hash = null;
        for(let i = 0; i < key.length - 1; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.buckets.length;
    }

    set(key, value) {
        const index = this._hash(key);

        if(!this.buckets[index]) {
            this.buckets[index] = []
        }
        
        this.buckets[index].push([key, value]);
        this.size++;
    }
    
    get(key) {
        const index = this._hash(key);
        
        if(!this.buckets[index]) return false;

        let bucketItem = false;
        
        this.buckets[index].forEach(item => {
            if(item[0] === key) {
                bucketItem = item[1]; 
            }
        });

        return bucketItem;
    }

    remove(key) {
        const index = this._hash(key);
        if(this.buckets[index] && this.buckets[index].length) {
            this.buckets[index] = this.buckets[index]
                .filter(item => item[0] !== key);
            
            this.size--;
            return true;
        } else {
            return false;
        }
    }

    display() {
        this.buckets.forEach((bucket, index) => {
            const bucketValues = bucket.map(([key, value]) => `[ ${key}: ${value} ]`);
            console.log(`${index}: ${bucketValues}`);
        })
    }
}

const hashTable = new HashTable();
hashTable.set('bla', 10);
hashTable.set('cco', 12);
hashTable.set("Spain", 110);
hashTable.set("ǻ", 192);

hashTable.set("bk101","Data structures algorithms");
hashTable.set("bk108","Data analytics");
hashTable.set("bk200","Cyber security");
hashTable.set("bk259","Business Intelligence");
hashTable.set("bk330","S/W Development");

hashTable.display();

const x = hashTable.get('bk330'); // S/W Development
const y = hashTable.get('bk330asdads'); // false






