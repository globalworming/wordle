package com.serenitydojo.wordle.dictionary;

import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Test;

import static org.junit.Assert.assertEquals;

@DisplayNameGeneration(value = DisplayNameGenerator.IndicativeSentences.class)
public class MyGeneratorTest {

  @Test
  void methodNames() {
      assertEquals("should refuse non words", MyGenerator.generate("shouldRefuseNonWords"));
  }

  @Test
  void methodNamesWithNumbers() {
      assertEquals("should allow valid 5 letter words", MyGenerator.generate("shouldAllowValid5LetterWords"));
      assertEquals("do 3d render test", MyGenerator.generate("do3dRenderTest"));
  }
}
