define([], function() {
    return (function() {
        function addBefore(newElement, sibling) {
            $(sibling).before($(newElement));
        }

        function addAfter(newElement, sibling) {
            $(sibling).after($(newElement));
        }

        return {
            addBefore: addBefore,
            addAfter: addAfter
        }
    })();
});

