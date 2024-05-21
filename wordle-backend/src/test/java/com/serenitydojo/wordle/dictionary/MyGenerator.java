package com.serenitydojo.wordle.dictionary;

import org.junit.jupiter.api.DisplayNameGenerator;

import java.lang.reflect.Method;

public class MyGenerator implements DisplayNameGenerator {
    public static String generate(String methodName) {
        String lowecaseAndWithSpaces = methodName.replaceAll("(.)(\\p{Upper})", "$1 $2").toLowerCase();
        return lowecaseAndWithSpaces.replaceAll("([a-zA-Z])([0-9])", "$1 $2").toLowerCase();
    }

    @Override
    public String generateDisplayNameForClass(Class<?> testClass) {
        String simpleName = testClass.getSimpleName();
        return generate(simpleName);
    }

    @Override
    public String generateDisplayNameForNestedClass(Class<?> nestedClass) {
        String simpleName = nestedClass.getSimpleName();
        return generate(simpleName);

    }

    @Override
    public String generateDisplayNameForMethod(Class<?> testClass, Method testMethod) {
        return generate(testMethod.getName());
    }
}
