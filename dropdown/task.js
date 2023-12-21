
let dropdownList = document.querySelector('.dropdown__list');
let dropdownLink = document.querySelectorAll('.dropdown__link');
let dropdownValue = document.querySelector('.dropdown__value');

dropdownLink = Array.from(dropdownLink);

dropdownValue.addEventListener("click", () => {
        dropdownList.classList.add('dropdown__list_active');
});


for (let index = 0; index < dropdownLink.length; index++) {
        dropdownLink[index].onclick = function() {
                //let valueItem = this.textContent;
                //dropdownValue.textContent = valueItem;
                dropdownValue.textContent = dropdownLink[index].textContent;
                dropdownList.classList.remove('dropdown__list_active');
                //dropdownList.className = "dropdown__list";
		return false;
        };
            
};


