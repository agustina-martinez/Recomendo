export const getFetchData = async () => {
    const res = await fetch(`https://api.unsplash.com/photos/?page=10&per_page=20&order_by=latest&client_id=ZJIb9mKmajs7KbwSRFk3afyEvZm52fxN2tnYVAKYkNA`);
    const data = await res.json();
    return data;
}

/*photos/?page=10&per_page=20&order_by=latest*/
/*photos/random/?q=developer*/