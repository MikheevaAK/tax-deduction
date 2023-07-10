<template>
    <span class="tooltip">
        большинство&nbsp;
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="question-mark">
                <circle id="Ellipse 3" cx="8" cy="8" r="8" fill="#5BADDE" />
                <path id="?"
                      d="M5.644 8.446C5.644 7.256 6.428 6.528 7.996 6.262C9.046 6.08 9.508 5.702 9.508 5.072C9.508 4.456 8.92 4.022 7.982 4.022C6.988 4.022 6.26 4.61 5.994 5.674L5 5.142C5.392 3.784 6.54 3 7.996 3C9.634 3 10.684 3.84 10.684 4.974C10.684 6.136 9.998 6.836 8.248 7.214C7.296 7.41 6.82 7.816 6.82 8.432C6.82 9.034 7.268 9.412 7.926 9.412C8.668 9.412 9.116 8.992 9.41 8.166L10.376 8.712C9.942 9.832 9.102 10.42 7.94 10.42C6.582 10.42 5.644 9.622 5.644 8.446ZM7.226 12.94V11.47H8.696V12.94H7.226Z"
                      fill="white" />
            </g>
        </svg>
            <div class="tooltip__content">
                Виды налоговых вычетов
            </div>
    </span>
</template>

<script>
export default {
    name: "BaseTooltip",
    props: {
        word: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>

</style>