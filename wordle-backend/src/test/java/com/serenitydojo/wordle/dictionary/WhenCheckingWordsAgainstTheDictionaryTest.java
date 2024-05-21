package com.serenitydojo.wordle.dictionary;

import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayNameGeneration(value = MyGenerator.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class WhenCheckingWordsAgainstTheDictionaryTest {

    WordleDictionary wordleDictionary = new WordleDictionary();

    @Nested
    class CaseSensitivity {
        @ParameterizedTest
        @ValueSource(strings = {"Bloat","PLANE"})
        void prioA_shouldBeCaseInsensitive(String word) {
            assertThat(wordleDictionary.contains(word)).isTrue();
        }
    }

    @Nested
    class ValidWords {

        @ParameterizedTest
        @ValueSource(strings = {"to","aardvark","painting"})
        void prioB_shouldRefuseValidWordsThatDontHave5Letters(String word) {
            assertThat(wordleDictionary.contains(word)).isFalse();
        }

    }


    @ParameterizedTest
    @ValueSource(strings = {"bloat","plane","faint","feast","wordy"})
    void prioB_shouldAllowValid5LetterWords(String word) {
        assertThat(wordleDictionary.contains(word)).isTrue();
    }



    @ParameterizedTest
    @ValueSource(strings = {"abcde","last!","avion"})
    void prioC_shouldRefuseNonWords(String word) {
        assertThat(wordleDictionary.contains(word)).isFalse();
    }

}
