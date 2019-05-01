const $doc = $(document);
const $header = $('header');
const $main = $('main');

$doc.on('scroll', function () {
    const scrollPos = $doc.scrollTop();
    const sectionOffset = $main.offset().top;
    const headerHeight = $header.outerHeight();


    if (scrollPos < sectionOffset) {
        $header.css({
            'opacity': 1 - scrollPos / headerHeight,
            'filter': 'grayscale(' + 2 * scrollPos / headerHeight + ')',
        })
    }
})